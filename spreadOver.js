// Write a JavaScript program that takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
// Note: Use closures and the spread operator (...) to map the array of arguments to the inputs of the function.
const spreadOver = (fn) => (argsArr) => fn(...argsArr);
const arrayMax = spreadOver(Math.max);

console.log(arrayMax([1, 2, 3])); // 3
console.log(spreadOver(Math.max)([1, 3, 4])); // this might help to visualize what's going on. (returns 4)

//#Source https://bit.ly/2neWfJ2

// that wording tho!!!
