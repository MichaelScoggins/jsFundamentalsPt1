// Write a JavaScript program that accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

const converge =
  (converger, fns) =>
  (...args) =>
    converger(...fns.map((fn) => fn.apply(null, args)));

const average = converge(
  (a, b) => a / b,
  [(arr) => arr.reduce((a, v) => a + v, 0), (arr) => arr.length]
);

console.log(average([6, 7])); // 6.5
console.log(average([1, 2, 3, 4, 5, 6, 7])); // 4

//#Source https://bit.ly/2neWfJ2

// kinda hurts my head on this current date
