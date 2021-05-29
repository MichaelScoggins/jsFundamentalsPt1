// Initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step
const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i) => i * step + start
  );

console.log(initialize_Array_With_Range(5)); // [0,1,2,3,4,5]
console.log(initialize_Array_With_Range(8, 3)); // console.log(initialize_Array_With_Range(8, 3));
console.log(initialize_Array_With_Range(6, 0, 2)); // console.log(initialize_Array_With_Range(6, 0, 2));

//#Source https://bit.ly/2neWfJ2
