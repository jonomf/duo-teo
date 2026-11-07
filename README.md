# Word Quest

A Duolingo-style reading and spelling game for a young English learner. One self-contained page, no build step.

**Play:** https://jonomf.github.io/duo-teo/

## How it works
- Words are split into units; each unit has three lessons: **Learn** (pictures and words), **Read** (finish the sentence, read and pick the picture), **Spell & Build** (spell, unscramble, build sentences).
- Missed questions come back at the end of the lesson. XP, daily streak and combos keep it fun.
- Grown-up settings (⚙️, behind a multiplication question): word list, optional sentences, words per unit, player name.

## Word lists and parent mode
Word lists and game options (player name, words per unit, unlock order) live in [`lists.json`](lists.json). Every device downloads the latest copy each time the game opens or comes back to the foreground, so the kid's device never needs setting up.

**Parent mode (edit from your own phone or computer):**
1. Open the game, then ⚙️ → *Parent sign-in* (or go straight to `…/duo-teo/#parent`).
2. Paste a [fine-grained GitHub token](https://github.com/settings/personal-access-tokens/new) with *Only select repositories → duo-teo* and *Contents: Read and write*.
3. Add, edit or delete lists and change options. Each save commits `lists.json` to this repo.

The token stays in that browser only. On the kid's device, settings are read-only (behind a math question) apart from sound and resetting progress.

You can also edit `lists.json` directly on GitHub.

Each word list is its own **section**, after the ones before it. Units are made inside each list, so adding a list never changes earlier sections or their progress. Add new words as a new list rather than editing an old one: changing a list's words restarts progress for the unit those words are in.

Format: words are comma-separated. Common words get a picture automatically; add your own with `=`, e.g. `rocket=🚀`.
Sentences (optional, one per line) are used for sentence building and fill-in-the-blank with any list word they contain. Handy for words with no picture, like *because* or *said*.

## Saving
The kid's progress (XP, streak, unlocked lessons, word strength) is saved in the browser's local storage after every lesson, so it stays between visits on that device. The last downloaded word lists are saved too, so the game still works offline.
On iPhone/iPad, use **Share → Add to Home Screen** so Safari keeps the data and the game opens full-screen.
