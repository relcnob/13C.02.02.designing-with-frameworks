import {
  animate,
  stagger,
  spring,
  inView,
} from "https://cdn.skypack.dev/motion";

inView(".advantages_card", ({ target }) => {
  animate(target, { x: [-1000, 0], opacity: [0, 1] }, { duration: 1 });
});

inView(".product_text article", ({ target }) => {
  animate(target, { x: [600, 0], opacity: [0, 1] }, { duration: 1 });
});

inView(".product_graphics", ({ target }) => {
  animate(target, { x: [-600, 0], opacity: [0, 1] }, { duration: 1 });
});

inView(".highlight_small_cards", ({ target }) => {
  animate(target, { y: [100, 0], opacity: [0, 1] }, { duration: 1 });
});

inView(".highlight_small_cards + button", ({ target }) => {
  animate(target, { opacity: [0, 1] }, { duration: 2 });
});

inView("#team article:first-of-type", ({ target }) => {
  animate(target, { x: [2000, 0], opacity: [0, 1] }, { duration: 2 });
});

inView("#team article:last-of-type", ({ target }) => {
  animate(target, { x: [-2000, 0], opacity: [0, 1] }, { duration: 2 });
});

inView("#contact", ({ target }) => {
  animate(target, { x: [500, 0], opacity: [0, 1] }, { duration: 2 });
});
