var prompt = require('prompt');
var inquirer = require('inquirer');
var HangGame = require('./game.js');

console.log("Get ready to guess a letter!")


var hangManGame = new HangGame();
var userGuesses = 5;

prompt.start();
gameBegins(userGuesses);

function gameBegins(guesses) {
    console.log('guesses left: ' + guesses);
    if(hangManGame.currentWord.checkingWords() == true) {
        console.log("you're the best!");
        return;
    }
    if (guesses <= 0) {
        console.log('you suck!');
        return
    }
    console.log(hangManGame.currentWord.display());
    prompt.get(['theGuess'], function(err, result) {
        if(err) {
            return err;
        }
        if(hangManGame.currentWord.goodGuess(result.theGuess) == false) {
            guesses --;
        }
        
        gameBegins(guesses);
    })
}