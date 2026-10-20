# Roadmap

Goal: Tribal Knowledge on iPhone and Android, works offline, picks up content updates, and lets anyone contribute knowledge through a reviewed GitHub process. Branding follows jcady.org.

## Status

| Phase | Status | Notes |
|---|---|---|
| 1. Installable web app, offline | Done | Manifest, service worker, full-bleed icons. |
| 2. Branding | Done | Cairn logo, jcady.org links, favicon. |
| 3. Content as data | Done (JS, not CSV) | `data/physical.js`, `data/mental.js`. CSV import/export is still open. |
| 4. Mental & Psychological | Done (v1) | 4 trees, 9 outcomes, sourced. Needs wording review. |
| 5. Contribute flow in the app | Done (v1) | `contribute.html`: how it works, the logic, edit links, rules. |
| 6. Android APK | Next | See `docs/ANDROID.md`. Needs a signing key and a machine with the Android SDK. |
| 7. Gear & Logistics | Done (v1) | `data/gear.js`, 4 trees, 5 outcomes, sourced. Needs wording review. |
| 8. Training | Done (v1) | `data/training.js`, 3 trees, 3 outcomes, sourced. Injury-return content not added yet (no verified source). |
| 9. Hosting review | Open | GitHub Pages now. Revisit with Cloudflare Pages when we need headers or a submission queue. See `docs/ARCHITECTURE.md`. |

## Decisions (from Jeff)

- **Medical review:** Not required right now. Moving faster. A clinical reviewer can be added later, on the backend or as a step in the contribution flow.
- **Contributions:** GitHub only. The flow lives in the app (`contribute.html`), and each item links to its file.
- **Install path:** Installable web app first, then the APK.
- **Mental & Psychological:** Done next, with science behind each piece of advice, following UERA's source-grounding rules.
- **Live site:** Publish directly to tk.jcady.org for now.

## Open items

- Android signing key and `assetlinks.json` (needs a build on a machine with the Android SDK; the sandbox can't reach Google's SDK servers).
- Mental & Psychological wording review. Two items are plain-language rules, not proven: the "pause before quitting" rule and the self-talk advice.
- Physical & Medical wording review (see the earlier audit): cramping cause and the hyponatremia sports-drink line.
- Check the physical source URLs (not all were checked this pass).
- Decide on CSV import/export for contributors who prefer spreadsheets.
