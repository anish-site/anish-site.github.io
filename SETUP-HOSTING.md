# Moving to Cloudflare Pages + a private repo

Goal: **source private, site public.** Nobody can browse your repo, files, or
history; the portfolio stays publicly viewable.

The code is already prepared for this — the site reads its content from its own
origin (`posts/index.json`, `builds/index.json`) instead of the GitHub API, so
it keeps working once the repo is private. Do the steps in this order so you can
verify at each stage.

---

## 1. Set up Cloudflare Pages (repo still public)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
2. Authorise GitHub and pick `anish-site/anish-site.github.io`.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | **None** |
   | Build command | `node scripts/build-manifest.js && node scripts/build-rss.js` |
   | Build output directory | `/` |
   | Production branch | `main` |

4. **Save and Deploy**, then open the `*.pages.dev` URL it gives you.

**Verify before moving on:** the Builds & Projects cards, the blog list, and
clicking into a blog post all work on the `.pages.dev` URL.

## 2. Attach your domain (optional)

If you have a custom domain: Pages project → **Custom domains** → **Set up a
domain**. Cloudflare walks you through the DNS record.

Skip this and you simply keep the `.pages.dev` address.

## 3. Make the repo private

GitHub → repo **Settings** → **General** → bottom → **Change repository
visibility** → **Make private**.

> GitHub Pages does not publish from a private repo on the free plan, so
> `anish-site.github.io` will stop serving at this point. That's expected —
> Cloudflare is serving the site now. Do this step **after** step 1 works.

## 4. Re-check

Open the Cloudflare URL again and confirm the builds cards, blog list, and an
individual post still load. They should be unchanged.

---

## What happens when you edit content now

1. You add or edit a file in `/builds` or `/posts` and commit.
2. The GitHub Action regenerates `posts/index.json`, `builds/index.json` and
   `feed.xml`, and commits them.
3. Cloudflare sees the commit, runs the build, and deploys.

Live within a minute or two, same as before. Editing from github.com in the
browser still works on a private repo.

## Files you should never edit by hand

These are generated — your edits would be overwritten on the next build:

- `posts/index.json`
- `builds/index.json`
- `feed.xml`

## If content ever looks stale or missing

- Check the Action run on the **Actions** tab and the Cloudflare build log.
- Worst case the site falls back to the built-in cards in `data.js`, so it
  degrades rather than breaking.
- You can regenerate locally with `node scripts/build-manifest.js`.

## One thing to be clear about

A private repo hides the **source**. Everything the site serves is still public
at your site URL — including the raw `posts/*.md`, `builds/*.md` and
`data.js`. That's normal for a portfolio, but don't put anything in this repo
you wouldn't publish.
