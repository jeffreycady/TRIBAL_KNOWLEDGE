# Architecture

## Goals

1. Work with no signal once loaded (trail, race course, remote spot).
2. Let content improve without an app release.
3. Make every claim traceable to a source.
4. Let people contribute without writing code.
5. Stay free to host and easy to maintain.

## How it's put together

- **Static site.** No server, no database, no build step. HTML, CSS, and JavaScript served as files.
- **Data is code.** `data/*.js` defines `OUTCOMES`, `NODES`, and `DECISION_TREES`. The app renders them directly. Any tree can route into any node or outcome, so one question can be reached from several starting points without duplication.
- **One engine.** `app.js` renders the hub, category, question, and outcome screens from the data.
- **Contribution page.** `contribute.js` reads the same data files, so the public logic view can't drift from what the app shows.

## Data model

```
DECISION_TREES  →  root node  →  NODES (question, options)  →  node or OUTCOMES
                                       ↑                              │
                                       └──────── (any option) ────────┘
```

- Ids are the stable keys. Renaming an id breaks links from other pages.
- `PHYSICAL_IDS` (in `data/physical.js`) records which ids the physical file defines. The contribute page uses it to point each item at its home file.

## Offline and updates

- `sw.js` precaches the app shell and the data files on install.
- Data files (`/data/`) use **network-first**. When online, users get the latest content. When offline, they get the last cached copy.
- Everything else uses **cache-first**.
- `CACHE_VERSION` is bumped when shell files change, so old caches are cleared.
- The install is a PWA (`manifest.json`). iPhone: Share, then Add to Home Screen. Android: install prompt or the APK (see ANDROID.md).

## Testing

`scripts/check-content.js` checks the data:

- Every `next` resolves to a node or an outcome.
- Every outcome has a title, body, action, and a source URL.
- Every node is reachable from some tree.
- Every tree has a category.
- Every path through every tree renders without errors.

## Hosting

**Current:** GitHub Pages, `main` branch, custom domain `tk.jcady.org` (`CNAME`).

Why it works now: free, no server to run, pull requests are the review step, and the contribution flow already sends people to GitHub.

**If we add features that need a server** (reviewer queue, submission form, analytics, Android app-link verification with custom headers), the options are:

| Option | Fits | Notes |
|---|---|---|
| Keep GitHub Pages | Static content and GitHub-based contributions | Cannot set custom headers. Android `assetlinks.json` works if the file is served as-is. Simplest. |
| Cloudflare Pages | Static site with deploy previews, custom headers, and optional Functions for a small backend | Free tier is generous. Preview URLs make review easier. Connects to Cloudflare tools we already have in this environment. |
| Cloudflare Pages + Functions + D1 | A moderated submission queue, reviewer accounts, analytics | Adds a database to maintain. Only needed when the GitHub flow isn't enough. |

**Recommendation:** stay on GitHub Pages for now, since it matches the GitHub-only contribution decision and costs nothing. Move to Cloudflare Pages when we need custom headers or a submission queue. The move is mostly a DNS change and a Pages project, and the content files don't change.

## Security notes

- Nothing the user types is stored or sent. The app is read-only for visitors.
- The contribute page only links to GitHub. It doesn't collect data itself.
- Content comes from the repo. Anyone can propose a change, but nothing merges without review.
- No third-party scripts. Fonts come from Google Fonts (cached by the service worker).
