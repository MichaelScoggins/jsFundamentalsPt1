// Write a JavaScript program to perform left-to-right function composition.
const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));

const add = (x, y) => x + y;
const square = (x) => x * x;
const addAndSquare = composeRight(add, square);

console.log(addAndSquare(1, 2)); // 9
console.log(addAndSquare(3, 2)); // 25

//#Source https://bit.ly/2neWfJ2
