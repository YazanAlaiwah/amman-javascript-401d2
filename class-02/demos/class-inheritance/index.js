const dogConstructor = require('./constructor.js');
const dogClass = require('./class.js');

console.log('Constructor');
const dog = new dogConstructor('bob');
console.log(dog);
dog.walk();
dog.speak();

console.log('Class');
const dogC = new dogClass('bob');
console.log(dogC);
dogC.walk();
dogC.speak();
