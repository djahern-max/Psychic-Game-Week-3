window.onload=function(){


// Create variables

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessesLeft = 9;
var playersGuess = [];
var wins = 0;


// The code below prompts the computer to gesss a letter within the "letters" array

updateLetterToGuess();

function updateLetterToGuess(){
  letterToGuess=letters[Math.floor(Math.random()*letters.length)]
  
}

// This display's the computer's guess on the page
 
document.getElementById("Computer's Guess").innerHTML = letterToGuess;

// Create code that tracks the game player's guess


document.onkeydown=function(event) {

var key_press = String.fromCharCode(event.keyCode);
guessesLeft--;

document.getElementById("Player's Guess").innerHTML = key_press; 

}


//Keep track of the game-player's guesses

document.getElementById("guessesLeft").innerHTML = guessesLeft;


//If the game-player's guess matches the computer's guess, count it as a "win"


if (key_press.toUpperCase()===letterToGuess) {

    wins++;
    console.log(wins);

}

else if (event!==letterToGuess) {

document.getElementById("wins").innerHTML = wins;



}




//If the game-player's guess does not match the computer's guess, count it as a "loss"


//Keep track of guesses left

//Keep track of guesses so far




}