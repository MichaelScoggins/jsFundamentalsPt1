// Map the values of an array to an object using a function
//#Source https://bit.ly/2neWfJ2
const mapObject = (arr, fn) =>
  ((a) => (
    (a = [arr, arr.map(fn)]),
    a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();

const squareIt = (arr) => mapObject(arr, (a) => a * a);
console.log(squareIt([1, 2, 3])); // {"1":1,"2":4,"3":9}
