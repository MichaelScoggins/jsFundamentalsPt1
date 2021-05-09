// Write a JavaScript program to get a random integer in the specified range.
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomIntegerInRange(0, 5)); // 1
console.log(randomIntegerInRange(2, 5)); // 3
console.log(randomIntegerInRange(5, -5)); // -1
console.log(randomIntegerInRange(-2, -7)); // -4

//#Source https://bit.ly/2neWfJ2
