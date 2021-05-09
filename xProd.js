// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

const xProd = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);

console.log(xProd([1, 2], ["a", "b"])); // [[1,"a"],[1,"b"],[2,"a"],[2,"b"]]
console.log(xProd([1, 2], [1, 2])); // [[1,1],[1,2],[2,1],[2,2]]
console.log(xProd(["a", "b"], ["a", "b"])); // [["a","a"],["a","b"],["b","a"],["b","b"]]

//#Source https://bit.ly/2neWfJ2

// this is pretty cool. seems like this would be lot more fun than nesting for loops at least
