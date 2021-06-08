// Group the elements of an array based on the given function and returns the count of elements in each group

const countBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

console.log(countBy([6, 10, 100, 10], Math.sqrt)); // {"10":1,"2.449489742783178":1,"3.1622776601683795":2}
console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // {"4":1,"6":2}
console.log(countBy(["one", "two", "three"], "length")); // {"3":2,"5":1}

//#Source https://bit.ly/2neWfJ2
