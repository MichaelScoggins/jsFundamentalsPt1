// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: "2", c: 3 }, ["b"])); // {"a":1,"c":3}
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"])); // {"a":1,"b":2}

//#Source https://bit.ly/2neWfJ2
