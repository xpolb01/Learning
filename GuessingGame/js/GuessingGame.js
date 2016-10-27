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
  var diff = this.difference();
  var guesses = this.pastGuesses;
  var guess = this.playersGuess;
  if(this.isLower()) {
    $('#subtitle').text("Guess Higher!")
  } else {
    $('#subtitle').text("Guess Lower!")
  }
  if(guess === this.winningNumber) {
    var win = "You Win!";
    return win;
  }
  else if(guesses.indexOf(guess) >= 0) {
    var again ='You have already guessed that number.';
    return again;
  }
  else {
    guesses.push(guess);
    $('#guess-list li:nth-child('+ guesses.length +')').text(guess);
    if(guesses.length >= 5) {
      $('#subtitle').text("Press the Reset button to play again!")
      return "You Lose."
    }
    if(diff <= 100) {
      if(diff < 50){
        if(diff < 25) {
          if(diff < 10) {
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

$(document).ready(function() { 
  var createGame = newGame();
  $('#submit').on('click', function() {
    if(createGame.pastGuesses.length < 5) {
      var bla = Number($('#players-input').val());
      $('#players-input').val('');
      var result = createGame.playersGuessSubmission(bla);
      $('#title').text(result);
    }
  });
  $('#reset').on('click', function() {
    $('#title').text('Play the Guessing Game!');
    $('#subtitle').text('Guess a number between 1-100!')
    $('.guess').text('-');
  });
  $('#hint').click(function() {
    var hints = createGame.provideHint();
    $('#title').text('The winning number is '+hints[0]+', '+hints[1]+', or '+hints[2]);
  });
});

















