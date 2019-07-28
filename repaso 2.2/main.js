"use strict";

const inputValue = document.querySelectorAll(".main_form_input");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");
const result5 = document.querySelector(".result5");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");

function checkNumber(ev) {
  const value = ev.currentTarget;
  if (value.value > 100) {
    value.value = "0";
  }
}

for (let i = 0; i < inputValue.length; i++) {
  inputValue[i].addEventListener("keyup", checkNumber);
}

function changeLength1(ev) {
  const value = ev.currentTarget;
  result1.classList.remove("result", "result-initial");

  if (value.value > 0) {
    result1.style.width = `${value.value}%`;
    if (value.value < 50) {
      result1.classList.remove("result");
      result1.classList.add("result-red");
    } else {
      result1.classList.remove("result-red");
      result1.classList.add("result");
    }
  } else {
    result1.style.width = "30px";
    result1.classList.remove("result", "result-red");
    result1.classList.add("result-initial");
  }
}

function changeLength2(ev) {
  const value = ev.currentTarget;
  result2.classList.remove("result", "result-initial");

  if (value.value > 0) {
    result2.style.width = `${value.value}%`;
    if (value.value < 50) {
      result2.classList.remove("result");
      result2.classList.add("result-red");
    } else {
      result2.classList.remove("result-red");
      result2.classList.add("result");
    }
  } else {
    result2.style.width = "30px";
    result2.classList.remove("result", "result-red");
    result2.classList.add("result-initial");
  }
}

function changeLength3(ev) {
  const value = ev.currentTarget;
  result3.classList.remove("result", "result-initial");

  if (value.value > 0) {
    result3.style.width = `${value.value}%`;
    if (value.value < 50) {
      result3.classList.remove("result");
      result3.classList.add("result-red");
    } else {
      result3.classList.remove("result-red");
      result3.classList.add("result");
    }
  } else {
    result3.style.width = "30px";
    result3.classList.remove("result", "result-red");
    result3.classList.add("result-initial");
  }
}

function changeLength4(ev) {
  const value = ev.currentTarget;
  result4.classList.remove("result", "result-initial");

  if (value.value > 0) {
    result4.style.width = `${value.value}%`;
    if (value.value < 50) {
      result4.classList.remove("result");
      result4.classList.add("result-red");
    } else {
      result4.classList.remove("result-red");
      result4.classList.add("result");
    }
  } else {
    result4.style.width = "30px";
    result4.classList.remove("result", "result-red");
    result4.classList.add("result-initial");
  }
}

function changeLength5(ev) {
  const value = ev.currentTarget;
  result5.classList.remove("result", "result-initial");

  if (value.value > 0) {
    result5.style.width = `${value.value}%`;
    if (value.value < 50) {
      result5.classList.remove("result");
      result5.classList.add("result-red");
    } else {
      result5.classList.remove("result-red");
      result5.classList.add("result");
    }
  } else {
    result5.style.width = "30px";
    result5.classList.remove("result", "result-red");
    result5.classList.add("result-initial");
  }
}

input1.addEventListener("keyup", changeLength1);
input2.addEventListener("keyup", changeLength2);
input3.addEventListener("keyup", changeLength3);
input4.addEventListener("keyup", changeLength4);
input5.addEventListener("keyup", changeLength5);
