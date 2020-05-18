function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log('walking');
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = () => {
  console.log('WOOf');
};
module.exports = Dog;
