// Write a JavaScript program to cast the provided value as an array if it's not one.
const castArray = (val) => (Array.isArray(val) ? val : [val]);

console.log(castArray("w3r")); // ["w3r"]
console.log(castArray([100])); // [100]

//#Source https://bit.ly/2neWfJ2
