// Write a JavaScript program to convert a value to a safe integer.
//#Source https://bit.ly/2neWfJ2
const toSafeInteger = (num) =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

console.log(toSafeInteger("3.2")); // 3
console.log(toSafeInteger(Infinity)); // 9007199254740991
