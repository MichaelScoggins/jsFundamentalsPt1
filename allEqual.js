// Check whether all elements in a given array are equal or not

const allEqual = (arr) => arr.every((val) => val === arr[0]);

console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
console.log(allEqual([12, 12, 12, 12])); // true

//#Source https://bit.ly/2neWfJ2
