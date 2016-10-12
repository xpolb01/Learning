var doubler = function(el) {
  return el * 2;
};
var map = function(arr, func) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(func(arr[i]));
  }
  return newArr;
};
var filter = function(arr, func) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {  
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
var contains = function(arr, el) {
  var hasEl = false;
  for(let key in arr){
    if(arr[key] === el) {
      hasEl = true;
    }
  }
  return hasEl;
};

var countWords = function(str) {
  var count = 1;
  if(str.length === 0) {
    return 0;
  }
  for(let i = 0; i < str.length; i++) {
    if(str[i] == " ") {
      count++;
    }
  }
  return count;
};

var reduce = function(arr, startVal, func) {
  var currentValue = startVal;
  for(let i = 0; i < arr.length; i++) {
    currentValue = func(currentValue, arr[i]);
  }
  return currentValue;
};
var countWordsInReduce = function(a, b) {
  return a + countWords(b);
};

var sum = function(arr) {
  return reduce(arr,0,function(a, b) {
      return a + b;
    });
};

var every = function(arr, func) {
  return reduce(arr, true, function(a, b) {
    return a && func(b);
  });
};

var any = function(arr, func) {
  return reduce(arr, false, function(a, b) {
      return a || func(b);
  });
};




