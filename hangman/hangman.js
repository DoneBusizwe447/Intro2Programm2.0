let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "new",
    "april",
    "doctor",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  
  let answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  
  let remainingLetters = word.length;
  let guess;
  let chances = word.length * 2;
  
  while (remainingLetters > 0 && chances > 0) {
    alert("You have " + chances + " chances left");
    alert(answerArray.join(" "));
    guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      break;
    } else if (guess.length > 1) {
      alert("Please enter a single letter.");
    } else {
      guess = guess.toLowerCase();
      let found = false;
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          if (answerArray[j] === "_") {
              answerArray[j] = guess;
            remainingLetters--;
            found = true;
          } else {
            alert("You guessed it already " + guess);
            break;
          }
        }
      }
      if (found === false) {
        chances--;
      }
    }
  }
  
  // after the the while loop
  
  if (guess === null) {
    alert("You quit. Please try again next time! The answer was " + word);
  } else if (remainingLetters === 0) {
    alert("Good job! the answer was " + word);
  } else {
    alert("You ran out of chances. The answer was " + word);
  }
  
  //--------------------------------------------
   
     