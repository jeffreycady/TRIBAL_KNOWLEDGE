# Methodology

How Tribal Knowledge decides what goes in, how it is sourced, and what it does not do.

## Purpose

Tribal Knowledge helps someone work out a likely cause of a problem during or around endurance sports, what to do now, and when to get help. It is a sourced guide, not a diagnosis tool and not a substitute for a clinician or an emergency service.

## How the decision trees work

- A **tree** starts with a plain-language question, such as "Where do you feel it?" or "Is this happening now?"
- Each **question** offers choices that lead to the next question or to an **outcome**.
- An **outcome** gives a title, what is likely going on, what to do now, a source, and, where useful, step-by-step instructions and links.
- **Severity** shows the urgency of the outcome:
  - `high`: get emergency help now.
  - `mid`: see a clinician or a sports medicine professional soon.
  - `low`: self-care, with a clear line for when to escalate.
- Any symptom that could be an emergency routes to an emergency or clinician outcome. Confusion, fainting, chest pain, and trouble breathing are never handled as self-care.

## Evidence standard

Sources are ranked in this order. Higher levels win when they disagree.

1. Consensus statements, position stands, and systematic reviews from recognized bodies (for example ACSM, ISSN, IOC, and the NPS Ten Essentials).
2. Primary studies published in peer-reviewed journals. A claim that rests on one study says so.
3. Official land-manager or agency guidance for rules that apply to a specific place (for example, a park's requirement to carry out waste).
4. Manufacturer guidance for product steps (for example, filter backflushing).

Not accepted as a primary source: forum posts, video channels, unsourced blog posts, and AI-generated summaries. These may point to a primary source, but the outcome must cite the primary source.

Rules that every outcome follows:

- The maintainer has read the source. Abstract-only reads are noted in the commit message.
- The source link is the page itself, not a summary.
- If a source is old or a rule may have changed, the outcome says so and tells the reader to check with the land manager or clinician.
- Numbers (fluid rates, carbohydrate per hour, boil times) come from a named source. Where sources disagree, the outcome gives the range and names both.

## Scope limits

- No diagnosis. Outcomes describe what a symptom is commonly associated with, and when to get help.
- No medication doses or drug advice. Outcomes point to a pharmacist, clinician, or the product label.
- No calorie targets or body-weight numbers for anyone who has described restricting food or purging.
- Mental health pages keep the 988 line (US) and an emergency instruction.
- Chemical water-treatment dosing is not included until it is sourced from a page the maintainer has read.

## Sport tagging

- Medical and mental outcomes apply to all sports unless tagged otherwise.
- Backcountry-only content is tagged to backcountry sports, for example mountain biking, hiking, and trail running.
- Sanitation (bathroom, waste, and water) applies to all outdoor sports.
- The Ten Essentials apply to non-race backcountry travel. They are not shown for ultra races, which are run with aid stations and a race-specific kit list.
- A sport filter hides whole trees and direct outcomes. An option inside a tree cannot be hidden, so sport-specific options go in their own tree.

## Review and maintenance

- Sources are rechecked at least once a year, and when a commit changes a source.
- Park and land-manager rules change. Those outcomes say to confirm with the park.
- Contributions go through GitHub pull requests (see CONTRIBUTING.md). Every change cites a source.
- `scripts/check-content.js` runs before each commit. It walks every path through every tree, fails if a link is broken or an outcome has no source or cannot be reached, and prints the counts.

## Known limits (as of this version)

- No independent medical review yet. Medical review is planned.
- Glossary definitions have not had an independent accuracy review.
- Some step-by-step instructions come from manufacturer or park pages. Where a page did not give a specific step (for example, syringe size or filter replacement timing), the outcome says so rather than guessing.
- Some pages use abstracts, not full texts, while a full-text review is pending. These are marked in the outcome's source as needing full-text checks.
