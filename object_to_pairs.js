// Write a JavaScript program to create an array of key-value pair arrays from a given object.
const object_to_pairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);

console.log(object_to_pairs({ a: 1, b: 2 })); // [["a",1],["b",2]]
console.log(object_to_pairs({ a: 1, b: 2, c: 3 })); // [["a",1],["b",2],["c",3]]

//#Source https://bit.ly/2neWfJ2

// ...soooo... what's wrong with just using "Object.entries()" ??
