// Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1.
const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);

console.log(tail([1, 2, 3])); // [2,3]
console.log(tail([1])); // [1]

//#Source https://bit.ly/2neWfJ2

// the wording tho
