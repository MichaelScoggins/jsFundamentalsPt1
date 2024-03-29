// Converts a comma-separated values string to a 2D array
//#Source https://bit.ly/2neWfJ2
const csv_to_array = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

console.log(csv_to_array("a,b\nc,d")); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(csv_to_array("what,does,this,do")); // [ [ 'what', 'does', 'this', 'do' ] ]
console.log(csv_to_array("a;b\nc;d", ";")); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(csv_to_array("head1,head2\na,b\nc,d", ",", true)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
