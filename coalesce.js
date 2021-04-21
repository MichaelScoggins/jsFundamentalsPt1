// Write a JavaScript program to get the first non-null / undefined argument.
const coalesce = (...args) => args.find((_) => ![undefined, null].includes(_));

console.log(coalesce(null, undefined, 0, "", NaN, "abcd")); // returns the third argument--an empty string.

//#Source https://bit.ly/2neWfJ2

// cool! "includes," with a bang in front of its caller, almost means "exclude." but why is it called "coalesce?" and shouldn't the question say "the first non-null / non-undefined argument" (with a "non-" in front of "undefined")? not that this is even one of the more ambivalently-worded examples.
