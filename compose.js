// Write a JavaScript program to perform right-to-left function composition.
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);

console.log(multiplyAndAdd5(5, 2)); // 15

//#Source https://bit.ly/2neWfJ2
