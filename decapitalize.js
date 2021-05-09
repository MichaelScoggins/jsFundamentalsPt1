// Write a JavaScript program to decapitalize the first letter of a string.
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));

console.log(decapitalize("W3resource")); // w3resource
console.log(decapitalize("Red", true)); // rED

//#Source https://bit.ly/2neWfJ2

// this is so cool! specifically, the way it destructures the passed string and its first letter (as "first") and then the rest of the letters as "...rest".
