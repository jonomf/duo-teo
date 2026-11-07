# Word Quest

A Duolingo-style reading and spelling game for a young English learner. One self-contained page, no build step.

**Play:** https://jonomf.github.io/duo-teo/

## How it works
- Words are split into units; each unit has three lessons: **Learn** (pictures and words), **Read** (finish the sentence, read and pick the picture), **Spell & Build** (spell, unscramble, build sentences).
- Missed questions come back at the end of the lesson. XP, daily streak and combos keep it fun.
- Grown-up settings (⚙️, behind a multiplication question): word list, optional sentences, words per unit, player name.

## Word list format
Comma-separated. Common words get a picture automatically; add your own with `=`, e.g. `rocket=🚀`.
Sentences (one per line) are used for any list word they contain. Handy for words with no picture, like *because* or *said*.

## Saving
Progress and settings are saved in the browser's local storage after every lesson, so they stay between visits on the same device and browser.
On iPhone/iPad, use **Share → Add to Home Screen** so Safari keeps the data and the game opens full-screen.
