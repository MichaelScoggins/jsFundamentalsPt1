// Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.
const get = (from, ...selectors) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from)
  );

const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
};

console.log(get(obj, "selector.to.val", "target[0]", "target[2].a")); // ["val to select",1,"test"]

//#Source https://bit.ly/2neWfJ2
