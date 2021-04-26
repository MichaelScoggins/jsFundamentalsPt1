// Write a JavaScript program to get removed elements of an given array until the passed function returns true.
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

console.log(takeWhile([1, 2, 3, 4], (n) => n >= 3)); // [1,2]

//#Source https://bit.ly/2neWfJ2
