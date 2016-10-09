var RPNCalculator = function() {
  this.emptyArrayError = "rpnCalculator is empty";
};
RPNCalculator.prototype = Object.create(Array.prototype);
(function(rpnProt) {
  rpnProt.popCompute = function(operationFunc) {
    if(this.length < 2) {
      throw this.emptyArrayError;
    }
    else {
      let num1 = this.pop();
      let num2 = this.pop();
      this.push(operationFunc(num1,num2));
    }
  };
  rpnProt.plus = function() {
      this.popCompute(function(first, second) {
        return first + second;
      });
  };
  rpnProt.minus = function() {
    this.popCompute(function(first, second) {
        return second - first;
    });
  };
  rpnProt.divide = function() {
    this.popCompute(function(first, second) {
        return second / first;
    });
  };
  rpnProt.times = function() {
    this.popCompute(function(first, second) {
        return second * first;
    });
  };
  rpnProt.value = function() {
      return this[this.length - 1];
  };
})(RPNCalculator.prototype);
