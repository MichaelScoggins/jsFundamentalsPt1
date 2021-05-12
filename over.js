// Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.
const over = (...fns) => (...args) => fns.map((fn) => fn.apply(null, args));

const minMax = over(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5)); // [1,5]
console.log(minMax(1, 2, 5, 4, 3)); // [1,5]
console.log(minMax(1, 2, 5, -4, 3)); // [-4,5]

//#Source https://bit.ly/2neWfJ2
