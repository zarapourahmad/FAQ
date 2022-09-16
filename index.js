"use strict";

const arroow = document.querySelectorAll(".arrow");
const sumary = document.querySelectorAll("summary.summary1");

for (let i = 0; i < sumary.length; i++) {
  sumary[i].addEventListener("click", function () {
    let arowstyle = document
      .querySelectorAll(".arrow")
      [i].classList.toggle("hide");
    if (arowstyle) {
      sumary[i].style.fontWeight = "700";
    } else {
      document.querySelectorAll(".arrow")[i].classList.add("hide2");
      sumary[i].style.fontWeight = "400";
    }
  });
}
