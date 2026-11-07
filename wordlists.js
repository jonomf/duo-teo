/*
  WORD LISTS — built into the game.

  Each list becomes its own section, shown in this order. To add new words,
  add a new list at the END. Leave earlier lists as they are: changing a list's
  words restarts the progress for the unit those words are in.

  words:      comma-separated. Common words get a picture automatically;
              add your own with =, e.g.  rocket=🚀
  sentences:  optional, one per line. Used for sentence building and
              fill-in-the-blank for any word they contain.

  (Lists can also be added on a device in the game's ⚙️ settings. Those
  appear after these and are saved in that browser only.)
*/
window.WORD_LISTS = [
  {
    title: "Starter words",
    words: `cat, dog, sun, ball, apple, fish, tree, house, car, book,
            bird, star, moon, hat, cake, frog, duck, bus, egg, bed`,
    sentences: ``
  },

  // {
  //   title: "Next list",
  //   words: `word, word, word`,
  //   sentences: `
  //     A sentence with a word.
  //   `
  // },
];
