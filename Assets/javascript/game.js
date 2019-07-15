window.onload=function(){


// Create variables

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var guessesLeft = 9;
var playersGuess = [];


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
var key_code = event.keyCode;

document.getElementById("kp").innerHTML = key_press; 
document.getElementById("kc").innerHTML = key_code;
var status = document.getElemmentByID("status");
status.innerHTML = "DOWN Event Fired For : "+key_press;
}



// var e = event.key;
  // playersGuess.push(e);

  // console.log(playersGuess);

//Keep track of the computer' selection within the array



//Keep track of the game-player's guesses

document.getElementById("guessesLeft").innerHTML = guessesLeft;


//If the game-player's guess matches the computer's guess, count it as a "win"




//If the game-player's guess does not match the computer's guess, count it as a "loss"


//Keep track of guesses left

//Keep track of guesses so far




}