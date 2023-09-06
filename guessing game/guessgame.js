"use strict";

let startButton = document.getElementById("startbutton");
startButton.onclick = myGuess;

let secret = Math.floor(Math.random() * 10) + 1;
let guess = "";

function myGuess() {
  while (guess != secret) {
    guess = parseInt(prompt("Please guess a number(1-10)."));

    checkAnswer(guess);
  }
}

function checkAnswer(guess) {
  if (guess === secret) {
    alert("Correct!!,your '" + guess + "' is right.");
  } else if (guess < secret) {
    alert("Incorrect!!, Your guess is too low.");
  } else if (guess > secret) {
    alert("Incorrect!!, Your guess is too high");
  }
}
