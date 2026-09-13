# Managing Builds & Projects

Every card on the **Builds & Projects** page is a **Markdown file** in the
[`/builds`](./builds) folder of this repo. The site reads that folder
automatically (via the GitHub API) — so to add, edit, reorder, or remove a card
you just add, change, or delete a file. **No code changes.**

This is the same mechanism the blog uses for `/posts`.

---

## Adding a card

A card is a plain `.md` file with a small **front-matter** header:

```markdown
---
title: QuickTimes
meta: News digest · Live app
link: https://quicktimes.lovable.app/
group: highlight
order: 1
---
Keeps you up to date with the day's news from your favourite newspaper,
for the days you don't have time to read it.
```

Everything below the closing `---` becomes the card's description.

### Front-matter fields

| field | purpose |
|-------|---------|
| `title` | Card heading (if omitted, it's derived from the filename) |
| `meta` | The small coloured line above the text, e.g. `City guide · Live app` |
| `link` | Full URL. **If present, the whole card becomes clickable and opens in a new tab.** Leave it out for cards with nothing to open |
| `group` | Which part of the page it goes in — see below (default: `highlight`) |
| `order` | Position within its group, ascending. No `order` sorts last |

### The three groups

| `group` | Where it appears |
|---------|------------------|
| `highlight` | Top of the page — your featured apps |
| `project` | Under the **Projects** heading — business / reliability work |
| `etcetera` | Under the **Et Cetera** heading — the running record of everything else |

A typo in `group` (say `hilight`) safely falls back to `highlight` rather than
hiding the card.

---

## Doing it without any coding

**A. Add a card — drag-and-drop on GitHub (easiest)**
1. Go to the [`builds`](./builds) folder on github.com.
2. **Add file ▸ Create new file**, name it `my-app.md`, paste the template above.
3. **Commit**. It appears on the site within a minute or two.

**B. Edit a card**
- Open any file in `builds/`, click the ✏️ pencil, change it, commit.
- To fix a link or retitle a card, that's the only place to change.

**C. Remove a card**
- Delete the `.md` file (open the file ▸ ⋯ ▸ **Delete file**).

**D. Reorder cards**
- Change the `order:` numbers. They're just sorted ascending, so `1, 2, 3…`.
  Leaving gaps (`10, 20, 30`) makes it easy to slot things in later.

**E. Promote or demote a card**
- Change `group:` — e.g. move an app from `highlight` down to `etcetera` when
  it's no longer headline material. Nothing else needs to change.

> Tip: use lowercase filenames with hyphens (`chennai-compass.md`). The filename
> is only used as a fallback title, but it keeps the folder tidy.

---

## How it works (for the curious)

- `builds.js` calls the GitHub contents API for `/builds`, reads each file's
  front-matter, groups the cards and sorts them by `order`.
- `detail.html` renders the built-in cards from `data.js` first, then swaps in
  the live ones once they load.
- **Nothing can go blank.** If the folder is empty, or GitHub is unreachable, or
  the request is rate-limited, the page keeps the built-in cards in `data.js`.
  A group with no files keeps its fallback too, so a half-finished folder can't
  wipe a section.
- A file with no front matter still renders — it just uses the filename as the
  title and the body as the description.

### One known limit

The folder listing uses GitHub's **unauthenticated** API, which allows roughly
60 requests per hour per visitor IP (shared with the blog). At portfolio traffic
this is a non-issue, and it degrades to the built-in cards rather than breaking.
If it ever becomes a problem, the fix is to cache the listing in `sessionStorage`
or generate a small `manifest.json` on commit.

You normally never touch `config.js`, but it's where the repo/branch/folder are
set if you ever move things.
