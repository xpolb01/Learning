var sometimes = function (func) {
  var timesCalled = 1;
  return function(a, b) {
    if(timesCalled < 4 ? true : timesCalled % 2 == 0 ? false : true ) {
      timesCalled++;
      return func.apply(this, arguments);
    }
    else {
      timesCalled++;
      return "I do not know!";
    }
  };
}