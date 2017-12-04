var Letters = function(let) {
    this.current = "_";
    this.theLetters = let;
    this.showLetter = false;
    this.letterIn = function(letter) {
        if(this.theLetters == letter) {
        this.current = this.theLetters;
        return true;
    }
    return false;
};
this.letterShows = function() {
    return this.current;
    };
};

module.exports = Letters;