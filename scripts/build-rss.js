/* ============================================================
   Generates feed.xml (RSS 2.0) from the Markdown files in /posts.
   Run locally with:  node scripts/build-rss.js
   In CI it runs automatically (see .github/workflows/rss.yml).
   No dependencies.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const SITE = 'https://anish-site.github.io';
const TITLE = 'Anish J — Thoughts';
const DESCRIPTION = 'Notes on product, reliability, and learning by Anish J.';
const POSTS_DIR = path.join(__dirname, '..', 'posts');
const OUT = path.join(__dirname, '..', 'feed.xml');

function parseFrontMatter(text) {
  const m = text.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  m[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const k = line.slice(0, idx).trim().toLowerCase();
      const v = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      if (k) meta[k] = v;
    }
  });
  return { meta, body: text.slice(m[0].length) };
}

function firstParagraph(md) {
  const lines = md.split('\n');
  for (const raw of lines) {
    const l = raw.trim();
    if (l && !/^#/.test(l) && !/^[-*>|]/.test(l) && !/^!\[/.test(l) && !/^```/.test(l)) {
      return l.replace(/[*_`#>\[\]]/g, '').slice(0, 280);
    }
  }
  return '';
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function titleize(slug) {
  return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function main() {
  let files = [];
  try { files = fs.readdirSync(POSTS_DIR).filter((f) => /\.md$/i.test(f)); }
  catch (e) { console.error('No posts directory found:', POSTS_DIR); }

  const posts = files.map((name) => {
    const slug = name.replace(/\.md$/i, '');
    const text = fs.readFileSync(path.join(POSTS_DIR, name), 'utf8');
    const { meta, body } = parseFrontMatter(text);
    return {
      slug,
      title: meta.title || titleize(slug),
      date: meta.date || '',
      category: meta.category || meta.tag || '',
      summary: meta.summary || meta.excerpt || firstParagraph(body)
    };
  }).sort((a, b) => {
    const ta = Date.parse(a.date), tb = Date.parse(b.date);
    if (isNaN(ta) && isNaN(tb)) return 0;
    if (isNaN(ta)) return 1;
    if (isNaN(tb)) return -1;
    return tb - ta;
  });

  const now = new Date().toUTCString();
  const items = posts.map((p) => {
    const link = SITE + '/post.html?p=' + encodeURIComponent(p.slug);
    const pub = isNaN(Date.parse(p.date)) ? now : new Date(p.date).toUTCString();
    return [
      '    <item>',
      '      <title>' + esc(p.title) + '</title>',
      '      <link>' + esc(link) + '</link>',
      '      <guid isPermaLink="true">' + esc(link) + '</guid>',
      '      <pubDate>' + pub + '</pubDate>',
      p.category ? '      <category>' + esc(p.category) + '</category>' : '',
      '      <description>' + esc(p.summary) + '</description>',
      '    </item>'
    ].filter(Boolean).join('\n');
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>' + esc(TITLE) + '</title>',
    '    <link>' + SITE + '/</link>',
    '    <atom:link href="' + SITE + '/feed.xml" rel="self" type="application/rss+xml" />',
    '    <description>' + esc(DESCRIPTION) + '</description>',
    '    <language>en</language>',
    '    <lastBuildDate>' + now + '</lastBuildDate>',
    items,
    '  </channel>',
    '</rss>',
    ''
  ].join('\n');

  fs.writeFileSync(OUT, xml);
  console.log('Wrote ' + OUT + ' with ' + posts.length + ' item(s).');
}

main();
