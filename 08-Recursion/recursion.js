
var factorialIterative = function(number) {
  var result = 1;
  for(var i = 2; i <= number; i++) {
  result *= i; 
  }
  return result;
};

var factorial = function(number) {
  if(number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

var fib = function(index) {
 if(index < 2) {
  return 1;
 }
 else {
  return fib(index - 2) + fib(index - 1);
 }
};

var type = function(element) {
  return Object.prototype.toString.call(element).slice(8, -1);
};

var stringify = function(element) {
  if(type(element) === "Function") {
    return  element + "";
  }
  if(type(element) === "Undefined") {
    return element + "";
  }
  if(type(element) === "Null") {
    return element + "";
  }
  if(type(element) === "Boolean") {
    return element + "";
  }
  if(type(element) === "Number") {
    return element + "";
  }
  if(type(element) === "String") {
    return '"' + element + '"';
  }
  if(type(element) === "Array") {
    return "[" +
    element.map(function(el) {
      return stringify(el);
    }).join(",") + "]";
  }
  if(type(element) === "Object") {
    var result = "";
    var keys = Object.keys(element);
    for(var el in element) {
      result += '"' + el + '": ' + stringify(element[el]);
      if(el !== keys[keys.length - 1]) {
        result += ',';
      }
    }
    return "{" + result
     + "}";
  }
}