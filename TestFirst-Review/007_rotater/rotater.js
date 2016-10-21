var rotater = function(line) {
  var reversed = false;
  return function(timesToCall) {
    var str = line.slice();
    if(timesToCall === line.length) {
      reversed = reversed === false ? true : false;
    }
    for(var i = 0; i < timesToCall; i++) {
        if(reversed) {
          str = str.slice(str.length - 1, str.length) + str.slice(0, str.length - 1);
        }
        else {
          str = str.slice(1, str.length) + str.slice(0, 1);
        }
    }
    return str;
  };
};