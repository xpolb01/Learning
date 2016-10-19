var accessor = function (obj) {
  return function(getter, setter) {
    if(setter === undefined) {
      return obj[getter];
    } 
    else{
      obj[getter] = setter;
    }
  }; 
}