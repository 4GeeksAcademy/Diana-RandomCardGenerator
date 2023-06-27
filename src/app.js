/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#suits").innerHTML = generateSuit();
    document.querySelector("#number").innerHTML = generateNumber();
  });
};

let generateSuit = () => {
  const allSuits = ["&spades;", "&#9830;", "&clubs;", "&diams;"];
  const suitsIndex = Math.floor(Math.random() * allSuits.length);
  const suitsGenerator = allSuits[suitsIndex];
  return suitsGenerator;
};

let generateNumber = () => {
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const numbersIndex = Math.floor(Math.random() * allNumbers.length);
  const numbersGenerator = allNumbers[numbersIndex];
  return numbersGenerator;
};
