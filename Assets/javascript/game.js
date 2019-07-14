window.onload=function(){


// Create variables

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessesLeft = 9;
var playersGuess = [];


// The code below prompts the computer to gesss a letter within the "letters" array

updateLetterToGuess();

function updateLetterToGuess(){
  letterToGuess=letters[Math.floor(Math.random()*letters.length)]
  console.log(letterToGuess);
}

// This display's the computer's guess on the page
 
document.getElementById("Computer's Guess").innerHTML = letterToGuess;

// Create code that prompts the game-player to select a number

function process()
{
  var playersGuess
}



document.getElementById("Player's Guess").innerHTML = guessedLetters;

//Keep track of the computer' selection within the array



//Keep track of the game-player's guesses

document.getElementById("guessesLeft").innerHTML = guessesLeft;


//If the game-player's guess matches the computer's guess, count it as a "win"




//If the game-player's guess does not match the computer's guess, count it as a "loss"


//Keep track of guesses left

//Keep track of guesses so far


// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

}