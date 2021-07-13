// Create a new string with the results of calling a provided function on every character in the calling string
//#Source https://bit.ly/2neWfJ2
const mapString = (str, fn) =>
  str
    .split("")
    .map((char, i) => fn(char, i, str))
    .join("");

console.log(mapString("Javascript exercises", (c) => c.toUpperCase())); // JAVASCRIPT EXERCISES
