// Write a JavaScript program to get a sorted array of objects ordered by properties and orders.
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
console.log(orderBy(users, ["name", "age"], ["asc", "desc"])); // [{"name":"barney","age":36},{"name":"fred","age":48},{"name":"fred","age":40}]
console.log(orderBy(users, ["name", "age"])); // [{"name":"barney","age":36},{"name":"fred","age":40},{"name":"fred","age":48}]

//#Source https://bit.ly/2neWfJ2

// i dont know what the question is asking, nor do i know what the answer is answering
