


var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessLeft = document.getElementById("guessleft");
var guessMade = document.getElementById("guessMade");


var wins = 0;
var losses = 0;

var usedArray = [];

var guesses = 10;

var computerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

console.log(computerGuess)

document.onkeyup = function(event) {

    var userGuess = event.key;  

if ( userGuess === computerGuess) {
    wins ++;

    resetGuesses()

    console.log(computerGuess)

} 
else { guesses --; 
   
}


if ( guesses === 0) {

    resetGuesses()

    losses ++;
    usedArray= [];
    
}

    document.getElementById('winsText').innerHTML = "Wins: " + wins;
    document.getElementById('lossesText').innerHTML = "Losses: " + losses;
    document.getElementById('guessLeft').innerHTML = "Guesses left: " + guesses;

    usedArray.push(userGuess);
    document.getElementById('guessMade').innerHTML = "Your Guesses So Far: " + usedArray;

}

function resetGuesses(){
    computerGuess=computerChoice[Math.floor(Math.random() * computerChoice.length)];
    guesses = 10
}