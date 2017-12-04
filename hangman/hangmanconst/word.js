var Letters = require('./letter.js')

var Word = function(checks) {
    this.checks = checks;
    this.guessedWord = [];
    this.youWin = false;
    this.guesses = [];

this.grabLetters = function() {
    for (var i=0; i< this.checks.length; i++) {
        var newLetter = new Letters(this.checks[i]);
        this.guessedWord.push(newLetter);
    }
};
this.grabLetters();

this.goodGuess = function(guessLetter) {
    for(var i = 0; i < this.guesses.length; i++) {
        if(guessLetter == this.guesses[i]) {
            return true;
        }
    }
    console.log(guessLetter);
    var enter=false;
    
    this.guesses.push(guessLetter);
    for(var i = 0; i < this.guessedWord.length; i++) {
        if(this.guessedWord[i].letterIn(guessLetter)) {
            this.guessedWord[i].showLetter = true;
            enter = true;
        }
        
    }
    return enter;
};
this.checkingWords = function() {
    for(var i = 0; i<this.checks.length; i++){
        if (this.checks.charAt(i) != this.guessedWord[i].current) {
            return false;
        }
    }
    return true;

};
this.display = function() {
      var emptyString = "";
    for (var i = 0; i < this.guessedWord.length; i++){
        emptyString += this.guessedWord[i].current + " ";
    }
    return emptyString;
};
    
};

module.exports = Word;

