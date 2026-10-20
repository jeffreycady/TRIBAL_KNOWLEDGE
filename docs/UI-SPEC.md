# UI spec (one page)

Applies to the live app and to the proposed community tips feature. Source of truth for styling is `styles.css` and `theme.js`. Where this page and the code disagree, the code is what ships.

## Principles
1. **Phone first.** One 640px column, thumb-reachable controls, nothing that needs hover.
2. **Works with no signal.** No screen may depend on a network call to render.
3. **Say how sure we are.** Every answer shows its source. Community tips also show how they were checked.
4. **Private by default.** Visitors enter nothing that is stored or sent. Theme choice stays on the device.

## Theme
- Dark by default, light by toggle (sun/moon button, top right). `data-theme` on `<html>`; saved in `localStorage` key `tk-theme`; applied by an inline `<head>` script before first paint.
- Same palette in both themes, with surfaces inverted. Text colors for green, amber and red use darker "ink" variants in light mode.
- First visit should follow the phone's `prefers-color-scheme`, then remember the user's choice. *(Not built yet.)*

| Token | Dark | Light |
|---|---|---|
| `--bg` / `--panel` / `--panel-2` | `#141614` / `#1d1f1d` / `#252825` | `#f6f4ee` / `#ffffff` / `#ecebe3` |
| `--text` / `--dim` | `#f3f1ea` / `#a2a79f` | `#1c201d` / `#5f665f` |
| `--accent` | `#CB5A28` | `#CB5A28` |
| Severity | sage `#9fc4a3`, amber `#e0a84a`, red `#e0553b` | inks `#2f6a3d`, `#8a5a10`, `#b23b2e` |

## Type
Barlow Condensed 700, uppercase, for headings. Barlow 400-600 for body (16px minimum). IBM Plex Mono 11-12px, uppercase, for labels, tags and metadata.

## Layout and navigation
- **Top bar:** sticky; cairn logo + wordmark left; `jcady.org` link and theme toggle right.
- **Bottom tab bar:** fixed; Home, Contribute, Jeff Cady. Active tab in accent on `--panel-2`. Respects the iPhone safe area. Community feature adds a fourth tab, **Tips**.
- **Content:** `.wrap` 640px max, 20px side padding, 12px gap between cards, 14px card radius.

## Components
| Component | Use | Rule |
|---|---|---|
| Category card | Hub | Colored left edge (5px); title, one line, mono tag pill |
| Question card | Decision flow | One question per screen; full-width option buttons; progress label in mono |
| Outcome sheet | Answer | Colored severity band, 3-segment meter, "what to do" box, source line, share button |
| Segmented control | Switching views (e.g. Courses / Conditions / Gear) | Pill track, 4px inset, active segment on `--panel-2` |
| Button | Actions | Pill; solid accent = primary, outlined = secondary; min height 44px |
| Notices | Disclaimer, crisis line | Left-edge bar; crisis line always shown on mental-health pages |

## Community tip card (proposed)
- Same card shell as an outcome, with a **trust band** in place of severity: *Coach-reviewed* (sage), *Community-reported* (amber), *Unverified* (dim). Band text always states the label, never color alone.
- Shows place or race, discipline, date reported, source or "first-hand".
- Actions: Helpful, Report, Share. Submit is a short form (place, tip, optional source) behind a **+** action on the Tips tab.

## Accessibility and quality bar
- Touch targets at least 44px. Visible focus ring in accent. Toggle has an `aria-label` that updates.
- Color is never the only signal (labels accompany severity and trust bands).
- Contrast of `--dim` and `--accent` on panel colors has **not been measured**; check against WCAG AA before release.
- Respect `prefers-reduced-motion`; current transitions are 150ms color fades only.

## Known fixes to carry into the build
1. `index.html` says `color-scheme: light` but the app is dark by default; use `dark light`.
2. `theme-color` is `#1B2A1F` in the HTML but `#141614` / `#f6f4ee` in `theme.js`; use one set.
3. Add system-preference default for first visit.
