// Filter out all values from an array for which the comparator function does not return true

const differenceWith = (arr, val, comp) =>
  arr.filter((a) => val.findIndex((b) => comp(a, b)) === -1);

console.log(
  differenceWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0],
    (a, b) => Math.round(a) === Math.round(b)
  )
); // [1,1.2]

//#Source https://bit.ly/2neWfJ2
