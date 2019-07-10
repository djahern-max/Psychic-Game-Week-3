//var letters lists an array of strings

var letters = ["a", "e", "i", "o", "u"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

//These functions run initially.  When the page loads the fuctions are called right away

updateLetterToGuess();
updateguessesLeft();
updateWins();
updateLosses();
//The function below instructs the computer to select a word from the array var letters.

function updateLetterToGuess(){

//When the function below is run we will randomly select a letter inside our array of strings.

letterToGuess=letters[Math.floor(Math.random()*letters.length)]

}

function updateguessesLeft(){
//This function will display the # of guesses left in our HTML.  It grabs the HTML element and sets it to guesses left.
document.querySelector("#guesses-left").innerHTML=guessesLeft;
}

function updateGuessesSoFar(){
//This function will display the # of guesses so far in our HTML.
document.querySelector("#guesses-so-far").innerHTML=guessedLetters;
}

function updateWins(){
//This function will display the # of wins so far in our HTML.
document.querySelector("#wins").innerHTML=wins;
}


function updateLosses(){
//This function will display the # of losses so far in our HTML.
document.querySelector("#losses").innerHTML=losses;
}
    
//The onClick function below monitors the user's guess

document.onkeydown=function(event){
    console.log(event.key)
    var e = event.key;
    guessesLeft--;
    var letter = e.toLowerCase();
    guessedLetters.push(letter);
    console.log(guessedLetters);
    updateguessesLeft();
    updateGuessesSoFar();
}

if (letters===letterToGuess) {

document.querySelector("wins").innerHTML=wins++;

//This If conditional Runs with we guess the correct letter, so we get a point for winning.
//Just like line 52 (guessesLeft--), take one away from 9, we want to do something similar but add 1 too wins
wins++;

//call reset function
    
}

else (letters!==letterToGuess) {

    document.querySelector("losses").innerHTML=losses++;

}
