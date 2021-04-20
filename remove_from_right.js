// Remove specified elements from the right of a given array of elements
//#Source https://bit.ly/2neWfJ2
function remove_from_right(arr, n = -1) {
  return arr.slice(n);
}

console.log(remove_from_right([1, 2, 3])); // [3]
console.log(remove_from_right([1, 2, 3], -1)); // [3]
console.log(remove_from_right([1, 2, 3], -2)); // [2, 3]
console.log(remove_from_right([1, 2, 3], -4)); // [1, 2, 3]

// this seems pretty useless
