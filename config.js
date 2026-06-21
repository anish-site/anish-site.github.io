/* ============================================================
   Site configuration — the ONE file you edit (just once).
   ------------------------------------------------------------
   To manage blog posts from a Google Sheet without touching code:

   1. Create a Google Sheet with a header row:
        title | date | category | summary | link | published
   2. File ▸ Share ▸ Publish to web ▸ choose the sheet ▸ format "CSV" ▸ Publish
   3. Copy the published URL (looks like:
        https://docs.google.com/spreadsheets/d/e/XXXX/pub?output=csv )
   4. Paste it below as blogCsvUrl and save.

   That's it. From then on, add/edit/delete rows in the sheet to
   manage your posts — no code changes needed.

   Leave blogCsvUrl empty to keep showing the built-in sample posts.
   Full guide: SETUP-BLOG.md
   ============================================================ */
window.SITE_CONFIG = {
  blogCsvUrl: ""
};
