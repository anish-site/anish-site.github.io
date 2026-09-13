# What to edit, and where

| To change this | Edit this |
|---|---|
| **Builds & Projects** cards | Add/edit/delete a `.md` file in [`/builds`](./builds) |
| **Blog / Thoughts** posts | Add/edit/delete a `.md` file in [`/posts`](./posts) |
| **Experience** — roles, bullets, skills | `data.js` → `sections.experience` |
| **Education** — degrees, bullets | `data.js` → `sections.education` |
| **Involvement** — cards | `data.js` → `sections.involvement` |
| Name, role, status, tagline, location, email, LinkedIn, GitHub | `data.js` → `profile` |
| Order of the home tiles | `data.js` → `order` |
| Section titles, icons, taglines | `data.js` → `sections.<name>.label` / `.icon` / `.tagline` |
| Colours, fonts, spacing, layout | `styles.css` |

## File formats

- Builds & Projects cards — [`SETUP-BUILDS.md`](./SETUP-BUILDS.md)
- Blog posts — [`SETUP-BLOG.md`](./SETUP-BLOG.md)

Anything in `/builds` or `/posts` is live within a minute or two of committing.
Changes to `data.js` are live immediately.
