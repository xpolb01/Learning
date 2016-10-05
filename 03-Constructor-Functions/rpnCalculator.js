var RPNCalculator = function() {};
var emptyArrayError = function(message) {
    this.message = message;
  };
emptyArrayError = "rpnCalculator is empty";
RPNCalculator.prototype = Object.create(Array.prototype);
RPNCalculator.prototype.plus = function() {
  if(this.length === 0) {
    throw emptyArrayError;
  }
  this.push(this.pop(this[this.length - 2]) + this.pop(this[this.length - 1]));
};
RPNCalculator.prototype.minus = function() {
  if(this.length === 0) {
    throw emptyArrayError;
  }
    let lastNum = this.pop();
    let firstNum = this.pop();
    this.push(firstNum - lastNum);
};
RPNCalculator.prototype.divide = function() {
  if(this.length === 0) {
    throw emptyArrayError;
  }
    let a1 = this.pop();
    let a2 = this.pop();
    this.push(a2 / a1);
};
RPNCalculator.prototype.times = function() {
  if(this.length === 0) {
    throw emptyArrayError;
  }
    this.push(this.pop() * this.pop());
};
RPNCalculator.prototype.value = function() {
  if(this.length === 0) {
    throw emptyArrayError;
  }
    return this[this.length - 1];
};
