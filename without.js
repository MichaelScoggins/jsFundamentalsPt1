// Filter out the element(s) of a given array, that have one of the specified values
//#Source https://bit.ly/2neWfJ2
const without = (arr, ...args) => arr.filter((v) => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2)); // [3]
console.log(without([2, 1, 2, 3], 3)); // [2,1,2]
