// Initialize a two dimension array of given width and height and value

const initialize_2D_Array = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

console.log(initialize_2D_Array(2, 2, 0)); // [[0,0],[0,0]]
console.log(initialize_2D_Array(3, 3, 3)); // [[3,3,3],[3,3,3],[3,3,3]]

//#Source https://bit.ly/2neWfJ2
