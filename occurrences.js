// Write a JavaScript program to count the occurrences of a value in an array.
//#Source https://bit.ly/2neWfJ2
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1)); // 3
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2)); // 2
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3)); // 1

// what i did. now i see why reducer is useful tho
const occurrences = (arr, target) => {
  let total = 0;
  for (num of arr) {
    if (num == target) {
      total++;
    }
  }
  return total;
};

const arr = [1, 2, 2, 3, 2];

console.log(occurrences(arr, 2)); // 3
