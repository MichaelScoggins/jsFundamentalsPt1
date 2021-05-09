// Write a JavaScript program to measure the time taken by a function to execute.
const time_taken = (callback) => {
  const result = callback();
  return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(2, 10)) + " ms"); // Time taken: 1024 ms
console.log("Time taken: " + time_taken(() => Math.sqrt(225)) + " ms"); // Time taken: 15 ms
console.log(
  "Time taken: " + time_taken(() => Math.sqrt(5 * 5 + 6 * 6)) + " ms"
); // Time taken: 7.810249675906654 ms

// this makes no sense to me. all this does is return the result of the callback... it has absolutely nothing to do with the time taken for the function to execute...
