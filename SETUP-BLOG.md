# Managing your Blog / Thoughts

Your blog posts are **Markdown files** in the [`/posts`](./posts) folder of this
repo. The site reads that folder automatically (via the GitHub API) — so to
publish, edit, or remove a post you just add, change, or delete a file. **No
spreadsheet, no manifest, no code changes.**

---

## Writing a post

A post is a plain `.md` file with a small **front-matter** header at the top:

```markdown
---
title: Reliability Is a Product Feature
date: 2026-06-10
category: Product
summary: A one-line teaser shown on the blog card.
---

# Reliability Is a Product Feature

Write your post here in **Markdown** — headings, **bold**, *italic*, lists,
> blockquotes,
links, images, `code`, tables… all supported.
```

### Front-matter fields (all optional except, ideally, `title`)
| field | purpose |
|-------|---------|
| `title` | Post title (if omitted, it's derived from the filename) |
| `date` | `YYYY-MM-DD` — used to sort newest-first |
| `category` | A short tag like `Product`, `Career`, `Learning` |
| `summary` | One-line teaser for the card (if omitted, the first paragraph is used) |

Everything below the closing `---` is the post body.

### What editor should I use?
Anything that saves `.md`. Comfortable, Word-like options:
- **Obsidian**, **Typora**, **iA Writer** (desktop, WYSIWYG-ish)
- **StackEdit** (stackedit.io — in-browser, nothing to install)
- Even plain Notes / VS Code

> Tip: the **filename becomes the URL**. `my-first-post.md` →
> `post.html?p=my-first-post`. Use lowercase words separated by hyphens.

---

## Publishing — three ways, no coding

**A. Drag-and-drop on GitHub (easiest)**
1. Go to the [`posts`](./posts) folder on github.com.
2. **Add file ▸ Upload files**, drop your `.md` in, and **Commit**.
3. It appears on the site within a minute or two.

**B. Edit in the browser**
- Open any file in `posts/`, click the ✏️ pencil, edit, commit. Same for
  fixing typos in an existing post.

**C. Just ask me**
- Paste the post text in chat and I'll add the file for you.

### Removing or hiding a post
- **Delete** the `.md` file (via GitHub: open the file ▸ ⋯ ▸ Delete), **or**
- keep it as a draft by renaming it to end in something the folder ignores —
  simplest is to move it out of `posts/`.

---

## How it works (for the curious)

- The blog list and home preview call the GitHub contents API for `/posts`,
  read each file's front-matter, and render cards newest-first.
- Clicking a card opens `post.html?p=<filename>`, which fetches that one file and
  renders the Markdown (via `marked` + `DOMPurify` for safety) in the site theme.
- If the posts can't be loaded for any reason, the site shows a small set of
  built-in sample cards so the page is never empty.

You normally never touch `config.js`, but it's where the repo/branch/folder are
set if you ever move things.
