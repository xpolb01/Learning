function setPropertiesOnObjLiteral(object) {
  object.x = 7;
  object.y = 8; 
  object.onePlus = function(arg) {
    return arg += 1;
  };
}

function setPropertiesOnArrayObj(arrayObject) {
  arrayObject.hello = function() {
    return "Hello!";
  }
  arrayObject.full = "stack";
  arrayObject[0] = 5;
  arrayObject.twoTimes = function (num) {
    return num * 2;
  }
}

function setPropertiesOnFunctionObj(functionObject) {
  functionObject.year = 2015;
  functionObject.divideByTwo = function(arg) {
    return arg = arg/2;
  };
  functionObject.prototype.helloWorld = function () {
    return "Hello World";
  };
  functionObject = function() {
      return "I am a function object, all functions are objects! Function can have their own properties too!";
  };
}