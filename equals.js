// Perform a deep comparison between two values to determine if they are equivalent
// Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.
// Note: Check if the two values are identical, if they are both Date objects with the same time, using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison). Check if only one value is null or undefined or if their prototypes differ. If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, then use Array.every() to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

console.log(
  equals(
    { a: [2, { e: 3 }], b: [4], c: "foo" },
    { a: [2, { e: 3 }], b: [4], c: "foo" }
  )
); // true

//#Source https://bit.ly/2neWfJ2

// ok well this is strange because this function is basically "Object.is()", but it doesn't even follow the same standards as a "deep comparison." e.g. the console.log should return false because the two objects are referenced in separate parts of memory, i.e. they are not "the same value." are we making a distinction between "equality" and "the same value?"
