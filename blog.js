/* ============================================================
   Blog data source.
   Fetches posts from the Google Sheet CSV configured in config.js,
   parses + normalizes them, and exposes BlogSource.fetchBlogs().
   Resolves to null when no sheet is configured or the fetch fails,
   so callers can fall back to the built-in sample posts.
   ============================================================ */
(function (global) {

  // ---- RFC-4180-ish CSV parser (handles quotes, commas, newlines) ----
  function parseCSV(text) {
    var rows = [], cur = [], val = '', inQ = false, i = 0, c;
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    for (; i < text.length; i++) {
      c = text[i];
      if (inQ) {
        if (c === '"') {
          if (text[i + 1] === '"') { val += '"'; i++; }
          else inQ = false;
        } else { val += c; }
      } else {
        if (c === '"') inQ = true;
        else if (c === ',') { cur.push(val); val = ''; }
        else if (c === '\n') { cur.push(val); rows.push(cur); cur = []; val = ''; }
        else val += c;
      }
    }
    if (val !== '' || cur.length) { cur.push(val); rows.push(cur); }
    return rows;
  }

  function toObjects(rows) {
    if (!rows.length) return [];
    var head = rows[0].map(function (h) { return String(h).trim().toLowerCase(); });
    return rows.slice(1)
      .filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); })
      .map(function (r) {
        var o = {};
        head.forEach(function (h, idx) { o[h] = (r[idx] != null ? String(r[idx]).trim() : ''); });
        return o;
      });
  }

  function truthy(v) {
    return v === undefined || v === '' || /^(true|yes|y|1|x|✓|published|live)$/i.test(String(v).trim());
  }

  function normalize(o) {
    return {
      title:    o.title || o.name || 'Untitled',
      date:     o.date || '',
      category: o.category || o.tag || o.topic || '',
      summary:  o.summary || o.excerpt || o.text || o.description || '',
      link:     o.link || o.url || '',
      published: truthy(o.published)
    };
  }

  function sortByDateDesc(a, b) {
    var ta = Date.parse(a.date), tb = Date.parse(b.date);
    if (isNaN(ta) && isNaN(tb)) return 0;
    if (isNaN(ta)) return 1;
    if (isNaN(tb)) return -1;
    return tb - ta;
  }

  function fetchBlogs() {
    var url = (global.SITE_CONFIG && global.SITE_CONFIG.blogCsvUrl || '').trim();
    if (!url) return Promise.resolve(null); // not configured → caller uses fallback
    return fetch(url, { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (text) {
        var posts = toObjects(parseCSV(text)).map(normalize).filter(function (p) { return p.published; });
        posts.sort(sortByDateDesc);
        return posts;
      })
      .catch(function (err) {
        if (global.console) console.warn('[blog] could not load sheet, using fallback:', err.message);
        return null;
      });
  }

  global.BlogSource = { fetchBlogs: fetchBlogs };
})(window);
