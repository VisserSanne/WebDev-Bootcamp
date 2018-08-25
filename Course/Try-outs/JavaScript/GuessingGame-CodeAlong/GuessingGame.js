// Create secretNumber
var secretNumber = 7;

// Ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// Check if guess is right
if(guess === secretNumber) {
    alert("You got it right!");
}

// Otherwise, check if higher
else if(guess > secretNumber) {
    alert("Too high! Guess again");
}

// Otherwise, check if lower
else {
    alert("Too low! Guess again");
}