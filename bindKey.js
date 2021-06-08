// Create a function that invokes the method at a given key of an object

const bindKey = (context, fn, ...args) =>
  function () {
    return context[fn].apply(context, args.concat(...arguments));
  };

const freddy = {
  user: "fred",
  greet: function (greeting, punctuation) {
    return greeting + " " + this.user + punctuation;
  },
};

const freddyBound = bindKey(freddy, "greet");

console.log(freddyBound("hi", "!")); // hi fred!

//#Source https://bit.ly/2neWfJ2
