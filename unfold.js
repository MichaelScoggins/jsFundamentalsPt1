// Write a JavaScript program to build an array, using an iterator function and an initial seed value.
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
var f = (n) => (n > 50 ? false : [-n, n + 10]);

console.log(unfold(f, 10)); // [-10,-20,-30,-40,-50]

//#Source https://bit.ly/2neWfJ2
