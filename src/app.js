/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let intervalId;

window.onload = () => {
  document.querySelector("#button").addEventListener("click", cardGenerator);
  intervalId = setInterval(cardGenerator, 10000);
};

//generador de carta aleatoria
let cardGenerator = () => {
  const suit = generateSuit();
  const suits = document.querySelectorAll("#suit");
  const numbers = document.querySelectorAll("#number");

  suits.forEach(suitElement => {
    suitElement.innerHTML = suit;
  });

  numbers.forEach(number => {
    number.innerHTML = generateNumber();
  });
};

//generador de palo aleatorio
let generateSuit = () => {
  const allSuits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  const suitsIndex = Math.floor(Math.random() * allSuits.length);
  const suitsGenerator = allSuits[suitsIndex];

  if (suitsGenerator === "&hearts;" || suitsGenerator === "&diams;") {
    return `<span class="redColor">${suitsGenerator}</span>`;
  } else {
    return suitsGenerator;
  }
};

//generador de número aleatorio
let generateNumber = () => {
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const numbersIndex = Math.floor(Math.random() * allNumbers.length);
  const numbersGenerator = allNumbers[numbersIndex];
  return numbersGenerator;
};
