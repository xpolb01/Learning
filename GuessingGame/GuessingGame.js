var generateWinningNumber = function () {
  return Math.ceil(Math.random() * 100);
};

var shuffle = function(array) {
  var arrayLength = array.length, 
      i,
      temp;
  while(arrayLength) {
    i = Math.floor(Math.random() * arrayLength--);
    temp = array[arrayLength];
    array[arrayLength] = array[i];
    array[i] = temp;
  }
  return array;
};

var Game = function() {
  this.playersGuess = null;
  this.pastGuesses = [];
  this.winningNumber = generateWinningNumber();
};

Game.prototype.difference = function() {
  return Math.abs(this.playersGuess - this.winningNumber);
};

Game.prototype.isLower = function() {
  return this.playersGuess < this.winningNumber;
};

Game.prototype.playersGuessSubmission = function(num) {
  if(num > 0 && num <= 100 && !isNaN(num)) {
    this.playersGuess = num;
    return this.checkGuess();
  }
  else {
    throw "That is an invalid guess.";
  }
};

Game.prototype.checkGuess = function() {
  if(this.playersGuess === this.winningNumber) {
    var win = "You Win!";
    return win;
  }
  else if(this.pastGuesses.indexOf(this.playersGuess) >= 0) {
    var again ='You have already guessed that number.';
    return again;
  }
  else {
    this.pastGuesses.push(this.playersGuess);
    if(this.pastGuesses.length >= 5) {
      return "You Lose."
    }
    if(this.difference() <= 100) {
      if(this.difference() < 50){
        if(this.difference() < 25) {
          if(this.difference() < 10) {
            return "You're burning up!";
          }
          return "You're lukewarm.";
        }
        return "You're a bit chilly.";
      }
      return "You're ice cold!";
    } 
  }
};

var newGame = function() {
  return new Game();  
};

Game.prototype.provideHint = function() {
  return shuffle([generateWinningNumber(),generateWinningNumber(), this.winningNumber]);
};



















