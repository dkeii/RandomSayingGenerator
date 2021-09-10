"use strict";

const obj = {
  1: "Love your family, work super hard, live your passion.",
  2: "It took thirty-eight years before 50 million people gained access to radios. It took television thirteen years to earn an audience that size. It took Instagram a year and a half.",
  3: "Life shrinks and expands on the proportion of your willingness to take risks and try new things.",
  4: "Being cool has nothing to do with age; it has to do with how solid your identity is.",
  5: "Even if your ambitions are huge, start slow, start small, build gradually, build smart.",
  6: "Stop focusing on dumb shit. Don’t be afraid to break things. Don’t be romantic. Don’t take the time to breathe. Don’t aim for perfect. And whatever you do, keep moving. Reread this a few times . . .",
  7: "Passion is an unmatched fuel. Add being happy to that and you have a wonderful formula for good health.",
  8: "There no longer has to be a difference between who you are and what you do.",
  9: "Developing your personal brand is the same thing as living and breathing your résumé",
  10: "Google gives preference to its own products, so having a Google+ account influences your search rankings.",
};

const text = document.querySelector(".random-saying");
const btn = document.querySelector(".random-btn");

const arr = Object.values(obj);
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
  text.textContent = "";
});
btn.addEventListener("click", changeText);

function changeText() {
  let randomNum = Math.floor(Math.random() * arr.length);
  //   text.textContent = arr[randomNum];
  if (counter >= 0) {
    arr.forEach((el) => {
      text.textContent = arr[counter];
    });
  }
  if (counter > arr.length - 1) {
    counter = 0;
    text.textContent = arr[0];
  }
  counter++;
}
