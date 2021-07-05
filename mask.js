// Replace all but the last number of characters with the specified mask character
//#Source https://bit.ly/2neWfJ2
const mask = (cc, num = 4, mask = "*") =>
  ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);

console.log(mask(1234567890)); // ******7890
console.log(mask(1234567890, 3)); // *******890
console.log(mask(1234567890, -4, "$")); // $$$$567890
