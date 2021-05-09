// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n)); // 20
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], "n")); // 8

//#Source https://bit.ly/2neWfJ2
