var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
};

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a " + this.constructor.name;
};

Mammal.prototype.haveBaby = function() {
  var newMammal = new this.constructor("Baby " + this.name, arguments[0]);
  this.offspring.push(newMammal);
  return newMammal;
};

var Cat = function(name, color) {
  this.color = color;
  Mammal.call(this, name);
};
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color){
  return Mammal.prototype.haveBaby.call(this, color);
}; 