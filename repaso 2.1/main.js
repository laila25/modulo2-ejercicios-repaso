"use strict";

const button = document.querySelector(".form_btn");
const face = document.querySelector(".face");
const selectFace = document.querySelector(".selectFace");
const div = document.querySelector(".div");

function upgrade(ev) {
  ev.preventDefault();
  upgradeFace();
  upgradeColor();
}

function upgradeFace() {
  face.innerHTML = selectFace.value;
}

function upgradeColor() {
  const randonNumber = getrandomNumber();

  div.classList.remove("div");
  div.classList.remove("div2");
  if (randonNumber % 2 === 1) {
    div.classList.add("div2");
  } else {
    div.classList.add("div");
  }
}

function getrandomNumber() {
  return Math.floor(Math.random() * 100);
}

button.addEventListener("click", upgrade);
