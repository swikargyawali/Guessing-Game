// Generate random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  let userGuess = document.getElementById("guess").value;

  if (userGuess == randomNumber) {
    document.getElementById("result").innerText = "🎉 Correct! You guessed it!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong! Try again.";
  }
}
