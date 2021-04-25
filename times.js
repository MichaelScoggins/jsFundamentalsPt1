// Write a JavaScript program to Iterate over a callback n times.
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
var output = "";
times(5, (i) => (output += i));

console.log(output); // 01234

//#Source https://bit.ly/2neWfJ2

// this is a weird one but pretty insightful for a few reasons. can't think of a great use case tho (but i'm sure there's at least one!)
