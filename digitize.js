// Write a JavaScript program to converts a specified number to an array of digits.
// Note: Convert the number to a string, using the spread operator (...) to build an array.
const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

console.log(digitize(123)); // [1,2,3]
console.log(digitize(1230)); // [1,2,3,0]
