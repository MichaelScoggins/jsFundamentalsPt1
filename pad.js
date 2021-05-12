// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

console.log(pad("cat", 8)); // cat
console.log(pad(String(42), 6, "0")); // 004200
console.log(pad("foobar", 3)); // foobar

//#Source https://bit.ly/2neWfJ2
