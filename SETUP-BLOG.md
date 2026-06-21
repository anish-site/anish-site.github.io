# Managing your Blog / Thoughts from a Google Sheet

Your site can pull blog posts **live from a Google Sheet** — so you add, edit, or
delete posts by editing a spreadsheet, never the code.

Until you connect a sheet, the site shows the built-in sample posts. Nothing
breaks if you skip this.

---

## One-time setup (about 3 minutes)

### 1. Create the sheet
Make a new Google Sheet. In **row 1**, add these column headers (lowercase,
exactly as shown):

| title | date | category | summary | link | published |
|-------|------|----------|---------|------|-----------|

- **title** – post title (required)
- **date** – e.g. `2026-06-21` (used to sort newest-first; any parseable date works)
- **category** – e.g. `Product`, `Career`, `Learning` (optional)
- **summary** – a sentence or two shown on the card (optional but recommended)
- **link** – full URL to the full post, if you have one (optional)
- **published** – `TRUE` to show, `FALSE` to hide a draft. Leave blank = shown.

> Only `title` is strictly required. Extra columns are ignored, so you can keep
> private notes in other columns.

### 2. Add a few rows
Example:

| title | date | category | summary | link | published |
|-------|------|----------|---------|------|-----------|
| Reliability Is a Product Feature | 2026-06-10 | Product | Why uptime and graceful failure belong on the roadmap. | https://… | TRUE |
| From On-Call to Roadmap | 2026-05-22 | Career | What moving from SRE into product taught me. | | TRUE |
| A draft I'm still writing | 2026-06-20 | Learning | Not ready yet. | | FALSE |

### 3. Publish the sheet as CSV
In Google Sheets:

1. **File ▸ Share ▸ Publish to web**
2. In the dialog, pick the specific **sheet/tab** (not "Entire Document") and
   choose the **CSV** format.
3. Click **Publish** and confirm.
4. Copy the URL it gives you. It looks like:
   `https://docs.google.com/spreadsheets/d/e/2PACX-XXXXXXXX/pub?output=csv`

### 4. Paste the URL into the site
Open **`config.js`** and set:

```js
window.SITE_CONFIG = {
  blogCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-XXXXXXXX/pub?output=csv"
};
```

Commit that one change (or ask me to). **Done.**

---

## Daily use — no code, ever again

- **Add a post:** add a row.
- **Edit a post:** change the cells.
- **Delete a post:** delete the row (or set `published` to `FALSE` to hide it).

Changes appear on the site within a minute or two (Google caches the published
CSV briefly). The site sorts posts newest-first by `date` and shows the latest
ones in the home-page "Blog" preview automatically.

---

## Notes & troubleshooting

- **It still shows samples:** check that `blogCsvUrl` is set in `config.js` and
  that the sheet is **Published to web as CSV** (a normal "Share link" will not
  work — it must be the *Publish to web* CSV URL).
- **A post won't show:** make sure `published` isn't `FALSE` and the row has a
  `title`.
- **Wrong order:** posts sort by `date` (newest first); rows with unparseable or
  missing dates sink to the bottom.
- **Prefer a different source?** Any URL that returns the same CSV columns works
  (Airtable CSV export, a `blogs.csv` file in this repo, etc.). Just point
  `blogCsvUrl` at it.
