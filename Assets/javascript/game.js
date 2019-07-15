window.onload=function(){

// Variables

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessesLeft = 9;
var wins = 0;
var losses = 0;


// Starts off the game with zero inputs for wins and losses and 9 guesses left.

document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;


// Computer selects letter at random from the "letters" array

updateLetterToGuess();

function updateLetterToGuess(){
  letterToGuess=letters[Math.floor(Math.random()*letters.length)]
  
}

// When user presses a key, an event is triggered

document.onkeydown=function(event) {

var key_press = String.fromCharCode(event.keyCode);
guessesLeft--;

// The variable above is compared to the computer's guess.  If they are equal, the variable "wins" is updated.  If they are not equal, the variable "losses" is updated

if (key_press.toUpperCase()===letterToGuess) {

    wins++;
    guessesLeft=9;
    
}

else if (guessesLeft===0) {

    losses++;
    guessesLeft=9;

}

// This updates the HTML to dislplay the game results

document.getElementById("Computer's Guess").innerHTML = letterToGuess;
document.getElementById("Player's Guess").innerHTML = key_press; 
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

}


}