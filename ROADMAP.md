# Tribal Knowledge — Roadmap

Goal: a Tribal Knowledge app people can install on iPhone and Android, that works offline, picks up content updates, and lets others contribute knowledge through a reviewed process. Branding follows jcady.org (cairn logo, Jeff Cady link).

## Phase 1 — Installable and offline (done)

- `manifest.json`, service worker (`sw.js`), full-bleed icons from the cairn logo.
- App shell and assets cached on first load; works with no signal.
- Branding: cairn logo, jcady.org link in the hub and footer.
- Collapse tree routes chest symptoms to the cardiac outcome.

## Phase 2 — Content as data

Move the decision trees out of `index.html` into flat files so content can be edited, reviewed, and contributed without touching app code.

```
content/
  categories.csv   id, name, description, ready
  trees.csv        id, title, blurb, root_node
  nodes.csv        id, text
  options.csv      node_id, position, label, next_id      (next_id = a node or an outcome)
  outcomes.csv     id, severity, title, symptoms, body, action, prevention, source_title, source_host, source_url
  sources.csv      id, title, host, url, checked_on        (one row per cited source)
```

- A build script (`scripts/build-content.js`) validates the CSVs and writes `content/content.json` plus `content/version.json` (content version and date).
- Validator rules: every `next_id` resolves; every outcome has a source with a URL; every `severity:high` outcome is reachable; no node is unreachable from a tree; no outcome is missing its title, action, or source.
- The validator runs on every pull request, so a bad row can't merge.

## Phase 3 — Content updates while offline

- The app renders from `content.json`, not hard-coded data.
- When online, the app fetches `version.json`. If the version is newer, it fetches `content.json` and stores it locally, then shows a short "Content updated" note.
- Offline, the app uses the last content it stored, so the app never has nothing to show.
- Service worker: content files use **network-first** (not cache-first), so updates actually arrive. Everything else stays cache-first.

## Phase 4 — Contributing knowledge

- `CONTRIBUTING.md`: the rules for content. Every outcome needs a cited source. "Do this now" has to be specific and actionable. Anything that could be an emergency gets a red-flag route. Medical content is never written as a diagnosis.
- `/contribute.html`: a readable view of the logic (each tree as a list of questions and answers, no code) and a "Suggest a change" button on each question and outcome.
- Suggestions open a pre-filled GitHub issue (template: what's changing, why, source). For CSV-savvy contributors, the page also offers a ready-to-edit CSV row.
- Nothing a stranger submits goes live directly. A maintainer reviews every change before it reaches `content/`.

## Phase 5 — Mobile apps

Two routes, in order:

1. **Install from the browser (available now).** iPhone: Safari → Share → Add to Home Screen. Android: install prompt. Works offline, updates content, no store account needed.
2. **App Store and Google Play.** Wrap the same web app with Capacitor, so one codebase produces both apps. Content updates still come from `content.json`, so most fixes don't need a store release.
   - Costs: Apple Developer Program (US$99/year); Google Play (US$25 one-time).
   - Review risk: Apple sometimes rejects thin web wrappers as "minimum functionality." An offline, content-heavy app like this usually passes, but that isn't guaranteed. Medical-adjacent apps also need a clear "not medical advice" disclaimer, which is already in place.

## Open decisions (need Jeff)

1. **Medical review.** Should a second reviewer (for example a sports medicine clinician or certified coach) approve medical content before it merges? Recommended, because outcomes give health guidance.
2. **Contribution channel.** GitHub only (issues and pull requests), or also a non-GitHub form that a maintainer converts? GitHub only is simpler and safer; a form adds reach but more moderation.
3. **Store timing.** Start with the installable web app and add store builds once content is solid, or prepare the store builds now?
4. **Build order for categories.** Mental & Psychological next, or audit Physical & Medical first (the source and wording review from before)?
5. **Publishing.** The local commit (`a9243d5`) and the branding changes are not pushed. The repo is served at tk.jcady.org, so pushing updates the live site.
