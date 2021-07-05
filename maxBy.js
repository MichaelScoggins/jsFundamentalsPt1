// Get the maximum value of an array, after mapping each element to a value using the provided function
//#Source https://bit.ly/2neWfJ2
const maxBy = (arr, fn) =>
  Math.max(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));

console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n)); // 8
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n")); // 8
