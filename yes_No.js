// Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.
const yes_No = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

console.log(yes_No("Y")); // true
console.log(yes_No("yes")); // true
console.log(yes_No("No")); // false
console.log(yes_No("Foo", true)); // true

//#Source https://bit.ly/2neWfJ2
