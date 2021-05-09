// Write a JavaScript program to filter out the non-unique values in an array, based on a provided comparator function.
// Note: The comparator function takes four arguments: the values of the two elements being compared and their indexes.

const filter_Non_UniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(
  filter_Non_UniqueBy(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
); // [{"id":2,"value":"c"}]

//#Source https://bit.ly/2neWfJ2
