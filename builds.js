/* ============================================================
   Builds & Projects data source — Markdown files in /builds.
   Auto-discovers cards via the GitHub contents API (no manifest),
   parses optional YAML-style front-matter. One file = one card.

   Front-matter keys (all optional except title):
     title:   QuickTimes
     meta:    News digest · Live app
     link:    https://quicktimes.lovable.app/
     group:   highlight | project | etcetera      (default: highlight)
     order:   1                                   (ascending; blank sorts last)
   Everything below the closing --- is the card's description.

   Exposes:
     BuildsSource.fetchBuilds() -> Promise<{highlight:[], project:[], etcetera:[]}>
   Resolves to null on failure so callers keep the built-in cards
   from data.js as a fallback.
   ============================================================ */
(function (global) {
  var cfg = (global.SITE_CONFIG && global.SITE_CONFIG.builds) || {};
  var REPO = cfg.repo || 'anish-site/anish-site.github.io';
  var BRANCH = cfg.branch || 'main';
  var FOLDER = cfg.folder || 'builds';
  var GROUPS = ['highlight', 'project', 'etcetera'];

  function apiListUrl() {
    return 'https://api.github.com/repos/' + REPO + '/contents/' + FOLDER + '?ref=' + BRANCH;
  }
  function rawUrl(path) {
    return 'https://raw.githubusercontent.com/' + REPO + '/' + BRANCH + '/' + path;
  }
  function slugFromName(name) { return name.replace(/\.md$/i, ''); }
  function titleize(slug) {
    return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  // ---- optional front-matter:  ---\n key: value\n ... \n---\n ----
  function parseFrontMatter(text) {
    var m = text.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!m) return { meta: {}, body: text.replace(/^﻿/, '') };
    var meta = {};
    m[1].split('\n').forEach(function (line) {
      var idx = line.indexOf(':');
      if (idx > -1) {
        var k = line.slice(0, idx).trim().toLowerCase();
        var v = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (k) meta[k] = v;
      }
    });
    return { meta: meta, body: text.slice(m[0].length) };
  }

  // Body -> one plain-text description (headings and list bullets dropped).
  function bodyText(md) {
    var out = [];
    md.split('\n').forEach(function (line) {
      var l = line.trim();
      if (!l || /^#/.test(l) || /^```/.test(l)) return;
      out.push(l.replace(/^[-*>]\s*/, ''));
    });
    return out.join(' ').replace(/[`\[\]]/g, '').trim();
  }

  function normalize(slug, text) {
    var fm = parseFrontMatter(text);
    var m = fm.meta;
    var group = (m.group || m.section || 'highlight').toLowerCase();
    if (GROUPS.indexOf(group) === -1) group = 'highlight';
    var order = parseFloat(m.order);
    return {
      slug: slug,
      title: m.title || titleize(slug),
      meta: m.meta || m.subtitle || '',
      link: m.link || m.url || '',
      linkText: m.linktext || '',
      group: group,
      order: isNaN(order) ? 9999 : order,
      text: m.text || m.summary || bodyText(fm.body)
    };
  }

  function byOrderThenTitle(a, b) {
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  }

  function listFiles() {
    return fetch(apiListUrl(), { cache: 'no-store', headers: { 'Accept': 'application/vnd.github.v3+json' } })
      .then(function (r) { if (!r.ok) throw new Error('GitHub API ' + r.status); return r.json(); })
      .then(function (items) {
        if (!Array.isArray(items)) return [];
        return items.filter(function (it) { return it.type === 'file' && /\.md$/i.test(it.name); });
      });
  }

  function fetchBuilds() {
    return listFiles().then(function (files) {
      if (!files.length) return null;
      return Promise.all(files.map(function (f) {
        return fetch(f.download_url || rawUrl(f.path), { cache: 'no-store' })
          .then(function (r) { return r.ok ? r.text() : ''; })
          .then(function (text) { return text ? normalize(slugFromName(f.name), text) : null; })
          .catch(function () { return null; });
      })).then(function (cards) {
        var grouped = { highlight: [], project: [], etcetera: [] };
        cards.filter(Boolean).forEach(function (c) { grouped[c.group].push(c); });
        GROUPS.forEach(function (g) { grouped[g].sort(byOrderThenTitle); });
        return grouped;
      });
    }).catch(function (err) {
      if (global.console) console.warn('[builds] listing failed, using fallback:', err.message);
      return null;
    });
  }

  global.BuildsSource = { fetchBuilds: fetchBuilds };
})(window);
