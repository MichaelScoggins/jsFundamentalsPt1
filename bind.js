// Write a JavaScript program to create a function that invokes fn with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.

const bind = (fn, context, ...args) =>
  function () {
    return fn.apply(context, args.concat(...arguments));
  };

function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}

const freddy = { user: "Morning" };

const freddyBound = bind(greet, freddy);
console.log(freddyBound("Good", "!")); // Good Morning!

//#Source https://bit.ly/2neWfJ2
