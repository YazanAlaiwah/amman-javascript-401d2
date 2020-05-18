/**
 * Functional programming
 */

/**
 * Pure Functions
 * always return the same output given the same input
 * causes no side effect
 */
function pureMultiply(a, b) {
  // a = 5;
  // b = 6;
  return a * b;
}
// const num1 = 1;
// const num2 = 2;

// pureMultiply(num1,num2);
/**
 * impure functions
 * console.log is a side effect
 */

function impureMultiply(a, b) {
  console.log(a, b);
  return a * b;
}

let num = 10;
changeNum();
isNumber();
function changeNum() {
  num = 'is number' + 10;
}
function isNumber() {
  return typeof num === 'Number';
}
const nums = [1, 2, 3];
function impureSquares(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

console.log(nums);
console.log('impure', pureSquares(nums));

function pureSquares(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

console.log(nums);
console.log('pure', pureSquares([...nums]));

function sayHi(person, fn) {
  return function () {
    fn(person);
  };
}

function hi(person) {
  console.log('hi', person);
}
sayHi('mahmoud', hi)();
