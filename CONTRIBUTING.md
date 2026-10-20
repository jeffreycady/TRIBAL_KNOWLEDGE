# Contributing to Tribal Knowledge

Thanks for helping. Every change goes through GitHub so there's a record of what changed, why, and against which source.

## Quick path

1. Open **https://tk.jcady.org/contribute.html**. It shows every question and outcome, with its id.
2. Find the item you want to change. Use the copy button to grab its id.
3. Click **Edit in GitHub**. Fork the repo if GitHub asks.
4. Search the file for the id (Ctrl+F or Cmd+F) and change only the text you're fixing. Keep the id.
5. If you changed an outcome, update its `source` with a link you've read.
6. Commit and open a **pull request**. Describe what changed, why, and link the source.

To suggest something new (a question, an outcome, a whole category), open a new issue: https://github.com/jeffreycady/TRIBAL_KNOWLEDGE/issues/new

## Content rules

- **Every outcome needs a source you've read.** Link the page itself, not a summary. If a claim rests on one study, say so.
- **Don't diagnose, and don't give medication doses.** Describe what to do and when to get help.
- **Actions must be specific and safe.** If a symptom could be an emergency, route it to the emergency or clinician outcome.
- **Keep the crisis line.** Mental health pages show 988 (US). Don't remove it.
- **Keep ids stable.** Other pages link to them, such as `contribute.html#out_crisis`.
- **Plain language, short sentences.**
- **Don't invent sources or attribute claims to people who didn't make them.**

## Data format

Content lives in `data/physical.js` and `data/mental.js`.

- `OUTCOMES`: keyed by id. Fields: `severity` (`low` | `mid` | `high`), optional `band` (the label above the outcome), `title`, optional `symptoms`, `body`, `action`, optional `prevention`, `source` (`title`, `host`, `url`).
- `NODES`: keyed by id. Fields: `text` (the question), `opts`: a list of `{label, next}`, where `next` is a node id or an outcome id.
- `DECISION_TREES`: entry points. Fields: `id`, `category`, `title`, `blurb`, `root` (a node id).
- `DIRECT_INDEX` / `MENTAL_DIRECT`: outcomes listed under "Already know what it is?".

## Before you open a pull request

Run the checks in the README. A pull request that breaks a link, drops a source, or leaves an outcome unreachable will be asked to fix it first.

## Review

Maintainers check wording and sources before merging. Medical content will get clinical review once a reviewer is recruited. Until then, all content is marked "open for community edits, not yet clinically reviewed" on the contribute page.
