// Write a JavaScript program to create tomorrow's date in a string representation.
const tomorrow = (long = false) => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(t.getDate()).padStart(2, "0")}`;
  return !long ? ret : `${ret}T00:00:00`;
};

console.log(tomorrow()); // 2018-08-17 (but today's date)
console.log(tomorrow(true)); // 2018-08-17T00:00:00 (but today's date)

//#Source https://bit.ly/2neWfJ2
