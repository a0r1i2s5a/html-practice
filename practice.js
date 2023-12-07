"use strict";

const treats = document.querySelector(".treats");
const apolloPic = document.querySelector(".apollopic");

const eat = document.querySelector(".eat");
const eatText = document.querySelector(".eat-txt-contents");
const sanpo = document.querySelector(".sanpo");
const sanpoText = document.querySelector(".sanpo-txt-contents");
const toy = document.querySelector(".toy");
const toyText = document.querySelector(".toy-txt-contents");
const outfit = document.querySelector(".outfit");
const outfitText = document.querySelector(".outfit-txt-contents");

eat.addEventListener("click", function () {
  eatText.classList.toggle("hidden");
});

sanpo.addEventListener("click", function () {
  sanpoText.classList.toggle("hidden");
});

toy.addEventListener("click", function () {
  toyText.classList.toggle("hidden");
});

outfit.addEventListener("click", function () {
  outfitText.classList.toggle("hidden");
});

treats.addEventListener("click", function () {
  apolloPic.classList.toggle("apollopic");
});
