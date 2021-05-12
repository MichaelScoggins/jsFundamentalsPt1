// Write a JavaScript program to get an array of given n random integers in the specified range.
const random_intArray_In_Range = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

console.log(random_intArray_In_Range(1, 20, 10)); // [10,5,17,4,19,5,4,6,9,2]
console.log(random_intArray_In_Range(-10, 10, 5)); // [7,-6,2,-9,-2]

//#Source https://bit.ly/2neWfJ2
