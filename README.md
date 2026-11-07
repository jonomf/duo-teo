# Word Quest

A Duolingo-style reading and spelling game for a young English learner. One self-contained page, no build step.

**Play:** https://jonomf.github.io/duo-teo/

## How it works
- Words are split into units; each unit has three lessons: **Learn** (pictures and words), **Read** (finish the sentence, read and pick the picture), **Spell & Build** (spell, unscramble, build sentences).
- Missed questions come back at the end of the lesson. XP, daily streak and combos keep it fun.
- Grown-up settings (⚙️, behind a multiplication question): word list, optional sentences, words per unit, player name.

## Adding word lists
Each word list is its own **section**, placed after the ones before it. Units are made inside each list, so adding a list never changes earlier sections or their progress. Locked sections open once the one before is finished (switch off "Unlock units in order" in settings to open everything).

Two ways to add a list:
- **In the repo (every device gets it):** add a new entry at the end of [`wordlists.js`](wordlists.js) and push.
- **On one device:** ⚙️ → *Add a word list*. Saved in that browser only.

Format: words are comma-separated. Common words get a picture automatically; add your own with `=`, e.g. `rocket=🚀`.
Sentences (optional, one per line) are used for sentence building and fill-in-the-blank with any list word they contain. Handy for words with no picture, like *because* or *said*.

Tip: add new words as a new list instead of editing an old one. Changing a list's words restarts progress for the unit those words are in.

## Saving
Progress and settings are saved in the browser's local storage after every lesson, so they stay between visits on the same device and browser.
On iPhone/iPad, use **Share → Add to Home Screen** so Safari keeps the data and the game opens full-screen.
