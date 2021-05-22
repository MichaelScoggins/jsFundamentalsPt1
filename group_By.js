// Write a JavaScript program to group the elements of a given array based on the given function.

const group_By = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); // {"2.4698178070456938":[6.1],"2.04939015319192":[4.2],"2.5099800796022267":[6.3]}
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); // {"4":[4.2],"6":[6.1,6.3]}
console.log(group_By(["one", "two", "three"], "length")); // {"3":["one","two"],"5":["three"]}

//#Source https://bit.ly/2neWfJ2

// i cannot tell whatsoever what is going on in these console logs.
