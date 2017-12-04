var Word = require("./word.js");

var HangGame = function() {
    this.chosenWords = ['coffee', 'hungover', 'alcohol', 'chair', 'workaholic', 'tanger', 'challenge', 'worlds apart'];
    this.randomWord = this.chosenWords[Math.floor(Math.random()*this.chosenWords.length)];
    this.currentWord = new Word(this.randomWord);
};
var hangMan = new HangGame();

module.exports = HangGame;

