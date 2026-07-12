# Personal site template — Minhyuk Nam

A static, dependency-free personal academic site (no build step, no Jekyll needed —
but the same philosophy: **templates and content are separate**).

- **`content.js` is the only file you edit.** Papers, publications, posts, projects,
  talks, teaching, news, menu items — everything renders from it, like Jekyll's
  `_config.yml` + `_data`. Copy a `{ ... }` block to add an entry, delete to remove,
  reorder blocks to reorder the page.
- The `.html` files are page templates. You should not need to touch them.
- `assets/css/site.css` holds all styling (light + dark), `assets/js/site.js` does the
  rendering. Neither needs edits for content changes.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — modular sections, order set by `homeSections` in content.js |
| `research.html` | Working papers (Listed / Recent / Topic sorting) + publications |
| `blog.html` | All posts (Recent / Topic) |
| `projects.html` | Project cards |
| `project-eutl.html` | Example project detail page with a live demo chart — duplicate this file for each new project |
| `teaching.html` | Teaching overview + course pages list |
| `course-econometrics.html` | Example course page — duplicate for each course |
| `talks.html` | Talks list |

## Configuration knobs (all in `content.js`)

- `profile.taglineOn` — show/hide the serif headline on the home page
- `homeSections` — order & visibility of home page sections
- `menu` — which items appear in the navigation; `projectsSubmenu` /
  `teachingSubmenu: false` makes those menu items plain links (no + submenu)
- `workingPapers[n].jmp: true` — red "Job Market Paper" badge
- `updated` — the "Updated …" date in the footer

Dark mode: the ◐ button, persisted per visitor via localStorage.

## Files you still need to add

- `files/cv/Minhyuk_Nam_CV.pdf` (the CV button target)
- `files/papers/…` and `files/teaching/…` PDFs referenced in content.js
- Replace the demo chart in `project-eutl.html` with your real embed (iframe of a
  Plotly export: `fig.write_html("figure.html")`, commit it, iframe it).

## Deploying to GitHub on a separate branch

From your `mhnam.github.io` checkout:

```bash
git checkout -b site-redesign
# copy the CONTENTS of this export folder into the repo root
# (index.html at repo root, overwriting the old one on this branch only)
git add -A
git commit -m "New site template (content-driven redesign)"
git push -u origin site-redesign
```

Your live site (main branch) is untouched. To preview the branch online:
GitHub → repo → Settings → Pages → set branch to `site-redesign` temporarily,
or just open `index.html` locally in a browser — everything works from disk.

When the content is ready: `git checkout main && git merge site-redesign && git push`.

## Fonts

Source Serif Pro and Open Sans are bundled (both SIL Open Font License) per CMU's
brand typography.
