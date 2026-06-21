/* ============================================================
   Blog data source — Markdown files in /posts.
   Auto-discovers posts via the GitHub contents API (no manifest),
   parses optional YAML-style front-matter, and renders Markdown.
   Exposes:
     BlogSource.fetchBlogs()       -> Promise<[post]>  (list, newest-first)
     BlogSource.fetchPost(slug)    -> Promise<post>    (single, with body)
     BlogSource.renderMarkdown(md) -> sanitized HTML
   fetchBlogs resolves to null on failure so callers can fall back
   to the built-in sample cards.
   ============================================================ */
(function (global) {
  var cfg = (global.SITE_CONFIG && global.SITE_CONFIG.blog) || {};
  var REPO = cfg.repo || 'anish-site/anish-site.github.io';
  var BRANCH = cfg.branch || 'main';
  var FOLDER = cfg.folder || 'posts';

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

  function firstParagraph(md) {
    var lines = md.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var l = lines[i].trim();
      if (l && !/^#/.test(l) && !/^[-*>|]/.test(l) && !/^!\[/.test(l) && !/^```/.test(l)) {
        return l.replace(/[*_`#>\[\]]/g, '').slice(0, 200);
      }
    }
    return '';
  }

  function normalize(slug, text) {
    var fm = parseFrontMatter(text);
    var meta = fm.meta;
    return {
      slug: slug,
      title: meta.title || titleize(slug),
      date: meta.date || '',
      category: meta.category || meta.tag || meta.topic || '',
      summary: meta.summary || meta.excerpt || firstParagraph(fm.body),
      body: fm.body
    };
  }

  function sortByDateDesc(a, b) {
    var ta = Date.parse(a.date), tb = Date.parse(b.date);
    if (isNaN(ta) && isNaN(tb)) return 0;
    if (isNaN(ta)) return 1;
    if (isNaN(tb)) return -1;
    return tb - ta;
  }

  function listFiles() {
    return fetch(apiListUrl(), { cache: 'no-store', headers: { 'Accept': 'application/vnd.github.v3+json' } })
      .then(function (r) { if (!r.ok) throw new Error('GitHub API ' + r.status); return r.json(); })
      .then(function (items) {
        if (!Array.isArray(items)) return [];
        return items.filter(function (it) { return it.type === 'file' && /\.md$/i.test(it.name); });
      });
  }

  function fetchBlogs() {
    return listFiles().then(function (files) {
      if (!files.length) return [];
      return Promise.all(files.map(function (f) {
        return fetch(f.download_url || rawUrl(f.path), { cache: 'no-store' })
          .then(function (r) { return r.ok ? r.text() : ''; })
          .then(function (text) { return text ? normalize(slugFromName(f.name), text) : null; })
          .catch(function () { return null; });
      })).then(function (posts) {
        posts = posts.filter(Boolean);
        posts.sort(sortByDateDesc);
        return posts;
      });
    }).catch(function (err) {
      if (global.console) console.warn('[blog] listing failed, using fallback:', err.message);
      return null;
    });
  }

  function fetchPost(slug) {
    var safe = String(slug).replace(/[^a-z0-9._-]/gi, '');
    return fetch(rawUrl(FOLDER + '/' + safe + '.md'), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('Post not found (' + r.status + ')'); return r.text(); })
      .then(function (text) { return normalize(safe, text); });
  }

  function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function renderMarkdown(md) {
    var html;
    if (global.marked) {
      html = global.marked.parse ? global.marked.parse(md) : global.marked(md);
    } else {
      html = '<pre>' + escapeHtml(md) + '</pre>';
    }
    if (global.DOMPurify) html = global.DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'rel'] });
    return html;
  }

  global.BlogSource = { fetchBlogs: fetchBlogs, fetchPost: fetchPost, renderMarkdown: renderMarkdown };
})(window);
