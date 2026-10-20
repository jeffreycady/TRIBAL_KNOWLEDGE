# Tribal Knowledge

Most of what makes endurance sports dangerous for newcomers isn't the distance. It's that the knowledge which would keep you safe already exists. It's just scattered across forums, buried in a coach's head, or something you only learn by getting hurt once. Tribal Knowledge puts it in one place, sourced and organized, so getting into this sport safely doesn't depend on already knowing someone who's done it before.

**Live site:** https://tk.jcady.org
**Built by:** [Jeff Cady](https://jcady.org), UESCA Certified Ultrarunning Coach

## What it does

- Walks someone through a plain-language question ("Where do you feel it?", "Is this happening now?") to a likely cause, what to do now, and when to get help.
- Every outcome cites a source.
- Works offline once loaded. It can be installed to a phone home screen.
- Shows the logic and lets anyone suggest a change (`contribute.html`).

## Categories

| Category | Status |
|---|---|
| Physical & Medical | Live. Injuries, illness, in-the-moment medical situations. |
| Mental & Psychological | Live. Race-day nerves, low moments, quitting, motivation, self-talk. |
| Gear & Logistics | Planned |
| Training | Planned |

## Project layout

```
index.html            App shell (hub, categories, trees, outcomes)
app.js                Engine: renders the decision trees from the data
data/physical.js      Physical & Medical questions, answers, outcomes, sources
data/mental.js        Mental & Psychological content
contribute.html/.js   Public page: how it works, the logic, edit links
styles.css            Shared styles (app and contribute page)
sw.js                 Service worker: offline cache, network-first for data
manifest.json         Install metadata (name, icons, colors)
assets/               Cairn logo (jcady.org brand)
icon-*.png            App icons, full-bleed for iOS/Android
ROADMAP.md            Where this is going
CONTRIBUTING.md       Rules and steps for suggesting changes
docs/                 Architecture, Android build notes
```

## Run it locally

No build step. Serve the folder over http so the service worker can register:

```bash
cd tribal_knowledge
python3 -m http.server 8080
# open http://localhost:8080
```

Opening `index.html` directly from disk works for browsing, but it won't install or cache offline.

## Checks

Run these before opening a pull request:

```bash
node --check app.js && node --check contribute.js && node --check sw.js
node --check data/physical.js && node --check data/mental.js
node scripts/check-content.js
```

`scripts/check-content.js` loads the data the same way the app does, walks every path through every tree, and fails if a link is broken, an outcome has no source, or an outcome can't be reached.

## Deploy

GitHub Pages serves `main` at `tk.jcady.org` (see `CNAME`). A push to `main` goes live, so keep changes on a branch until reviewed. `.nojekyll` turns off Jekyll processing.

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md): how to suggest a change, and the content rules.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): data model, offline behavior, updates, hosting.
- [docs/ANDROID.md](docs/ANDROID.md): building the Android APK.
- [ROADMAP.md](ROADMAP.md): phases and open decisions.

## Safety

This is general information, not medical advice, and it isn't a diagnosis. Anything that could be an emergency routes to emergency care first. Mental health pages keep the 988 crisis line visible (US). If you're in immediate danger, call your local emergency number.

## License

Content and code are © Jeff Cady. Sources cited in the content belong to their authors. Ask before reusing the content elsewhere.
