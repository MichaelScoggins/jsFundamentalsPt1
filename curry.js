// Write a JavaScript program to curry (curries) a function
// According to wiki.haskell.org "Currying is the process of transforming a function that takes multiple arguments into a function that takes just a single argument and returns another function if any arguments are still needed. f x y = g (x,y), however the curried form is usually more convenient because it allows partial application.
// Note: Use recursion. If the number of provided arguments (args) is sufficient, call the passed function fn. Otherwise, return a curried function fn that expects the rest of the arguments. If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

console.log(curry(Math.pow)(2)(8)); // 256
console.log(curry(Math.min, 3)(10)(50)(2)); // 2

//#Source https://bit.ly/2neWfJ2
