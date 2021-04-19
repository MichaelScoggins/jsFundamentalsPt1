// Extract out the values at the specified indexes from a specified array
//#Source https://bit.ly/2neWfJ2
const pull_at_Index = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
  return removed;
};
let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(arra1, [1, 3])); // [ 'b', 'd' ]
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4])); // [ 5 ]

// my version which only returns the values at specified indexes (which is all i could tell the question was asking)
const extract = (givenArr, pullArr) => {
  let extracted = [];
  givenArr.map((x, i) => pullArr.includes(i) && extracted.push(x));
  return extracted;
};

someArr = [3, 4, 2, 66];
console.log("extract", extract(someArr, [1, 3])); // [4, 66]
console.log("someArr after extraction", someArr); // arr avoids mutation
