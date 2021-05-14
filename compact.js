// Write a JavaScript program to remove falsey values from a given array.
const compact = (arr) => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34])); // [1,2,3,"a","s",34]
console.log(compact([false, NaN, "e" * 23])); // []

//#Source https://bit.ly/2neWfJ2
