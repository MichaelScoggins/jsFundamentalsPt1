// Write a JavaScript program to get every element that exists in any of the two arrays once.
// Note: Create a Set with all values of a and b and convert to an array.
const union = (a, b) => Array.from(new Set([...a, ...b]));

console.log(union([1, 2, 3], [4, 3, 2])); // [1,2,3,4]
console.log(union([1, 2, 3], [1, 2, 3])); // [1,2,3]

//#Source https://bit.ly/2neWfJ2
