//CONCAT STRING function is defined below 
var concatString = function() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => a + b);
};

//YOUR FUNCTION RUNNER function is defined below
var yourFunctionRunner = function() {
  var result = "";
  var args = Array.prototype.slice.call(arguments);
  for(let i = 0; i < args.length; i++) {
    result += args[i]();
  }
  return result; 
};

//MAKE ADDER function is defined below
var makeAdder = function(num) {
  return function(secondNum) {
    return num + secondNum;
  }
};

//ONCE function is defined below
var once = function(func) {
  var hasNotRun = true;
  return function(){
    if(hasNotRun) {
      func();
      hasNotRun = false;
    }
  }; 
};

//CREATE OBJECT WITH CLOSURES function is described below

var createObjectWithClosures = function() {
  var value = 0;
  return {
    oneIncrementer: function() {
      value++;
    },
    tensIncrementer: function() {
      value += 10;
    },
    getValue: function() {
      return value;
    },
    setValue: function(newVal) {
      value = newVal;
    }
  }
};