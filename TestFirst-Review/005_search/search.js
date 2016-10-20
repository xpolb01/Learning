var search = function(func, hasElement = false) {
  for(var i = 0; i < this.length; i++) {
    if(Array.isArray(this[i])) {
      hasElement = search.call(this[i], func, hasElement);
    }
    if(func(this[i])) {
      hasElement = true;
    }
  }
  return hasElement;
};