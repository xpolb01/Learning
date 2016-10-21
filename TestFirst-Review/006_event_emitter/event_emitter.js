var MyEventEmitter = function () {
  this.events = {};
};

MyEventEmitter.prototype.addListener = function(event, func) {
  if(this.events[event] === undefined){
    this.events[event] = [];
  }
  this.events[event].push(func);
};
MyEventEmitter.prototype.emit = function(event, arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return this.events[event].forEach((el, index) => el.apply(null, args[index]));
};