/* ============================================================
   Generates the content manifests the site reads at runtime:
     posts/index.json   — every post's front-matter (newest first)
     builds/index.json  — every build/project card, grouped and ordered

   These let the site load its content from its own origin with a
   single request, instead of calling the GitHub API once per file.
   That means it keeps working when the repo is private, and isn't
   subject to GitHub's unauthenticated rate limit.

   Run locally with:  node scripts/build-manifest.js
   In CI it runs automatically (see .github/workflows/rss.yml), and
   Cloudflare Pages runs it as part of the build command.
   No dependencies.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const BUILDS_DIR = path.join(ROOT, 'builds');
const GROUPS = ['highlight', 'project', 'etcetera'];

function parseFrontMatter(text) {
  const m = text.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return { meta: {}, body: text.replace(/^﻿/, '') };
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

function titleize(slug) {
  return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// --- matches firstParagraph() in blog.js ---
function firstParagraph(md) {
  for (const raw of md.split('\n')) {
    const l = raw.trim();
    if (l && !/^#/.test(l) && !/^[-*>|]/.test(l) && !/^!\[/.test(l) && !/^```/.test(l)) {
      return l.replace(/[*_`#>\[\]]/g, '').slice(0, 200);
    }
  }
  return '';
}

// --- matches bodyText() in builds.js ---
function bodyText(md) {
  const out = [];
  md.split('\n').forEach((line) => {
    const l = line.trim();
    if (!l || /^#/.test(l) || /^```/.test(l)) return;
    out.push(l.replace(/^[-*>]\s*/, ''));
  });
  return out.join(' ').replace(/[`\[\]]/g, '').trim();
}

function readDir(dir) {
  try { return fs.readdirSync(dir).filter((f) => /\.md$/i.test(f)); }
  catch (e) { return []; }
}

function buildPosts() {
  const posts = readDir(POSTS_DIR).map((name) => {
    const slug = name.replace(/\.md$/i, '');
    const { meta, body } = parseFrontMatter(fs.readFileSync(path.join(POSTS_DIR, name), 'utf8'));
    return {
      slug,
      title: meta.title || titleize(slug),
      date: meta.date || '',
      category: meta.category || meta.tag || meta.topic || '',
      summary: meta.summary || meta.excerpt || firstParagraph(body)
    };
  }).sort((a, b) => {
    const ta = Date.parse(a.date), tb = Date.parse(b.date);
    if (isNaN(ta) && isNaN(tb)) return 0;
    if (isNaN(ta)) return 1;
    if (isNaN(tb)) return -1;
    return tb - ta;
  });
  return posts;
}

function buildCards() {
  const cards = readDir(BUILDS_DIR).map((name) => {
    const slug = name.replace(/\.md$/i, '');
    const { meta, body } = parseFrontMatter(fs.readFileSync(path.join(BUILDS_DIR, name), 'utf8'));
    let group = (meta.group || meta.section || 'highlight').toLowerCase();
    if (GROUPS.indexOf(group) === -1) group = 'highlight';
    const order = parseFloat(meta.order);
    return {
      slug,
      title: meta.title || titleize(slug),
      meta: meta.meta || meta.subtitle || '',
      link: meta.link || meta.url || '',
      linkText: meta.linktext || '',
      group,
      order: isNaN(order) ? 9999 : order,
      text: meta.text || meta.summary || bodyText(body)
    };
  }).sort((a, b) => (a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title)));
  return cards;
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log('Wrote ' + path.relative(ROOT, file));
}

function main() {
  const generated = new Date().toISOString();

  const posts = buildPosts();
  writeJson(path.join(POSTS_DIR, 'index.json'), { generated, posts });

  const cards = buildCards();
  writeJson(path.join(BUILDS_DIR, 'index.json'), { generated, cards });

  const counts = GROUPS.map((g) => g + ': ' + cards.filter((c) => c.group === g).length).join(', ');
  console.log(posts.length + ' post(s); ' + cards.length + ' card(s) (' + counts + ').');
}

main();
