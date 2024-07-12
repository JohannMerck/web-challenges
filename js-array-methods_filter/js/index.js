console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((whatever) => {
  if (whatever.id === "2") return whatever;
});

const allCardsWith3Tags = cards.filter((yolo) => {
  if (yolo.tags.length === 3) return yolo;
});

const allCardsThatAreNotBookmarked = cards.filter((yoloyolo) => {
  if (yoloyolo.isBookmarked === false) return yoloyolo;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((yes) => {
  if ((yes.isBookmarked === true && yes.tags === "html") || "js");

  return yes;
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
