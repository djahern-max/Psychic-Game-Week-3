window.onload=function(){

// Variables

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

// Computer selects letter at random from the "letters" array

updateLetterToGuess();

function updateLetterToGuess(){
  letterToGuess=letters[Math.floor(Math.random()*letters.length)]
  
}

// When user presses a key, an event is triggered

document.onkeydown=function(event) {

var key_press = String.fromCharCode(event.keyCode);

// The variable above is compared to the computer's guess.  If they are equal, the variable "wins" is updated.  If they are not equal, the variable "losses" is updated

if (key_press===letterToGuess) {

    wins++;
    
}

else if (key_press!==letterToGuess) {

    losses++;

}

// This updates the HTML to dislplay the game results

document.getElementById("Computer's Guess").innerHTML = letterToGuess;
document.getElementById("Player's Guess").innerHTML = key_press; 
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

}


}