// Write a JavaScript program to target a given value in a nested JSON object, based on the given key.
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc; // what does this line do?
        if (typeof val === "object") return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};

console.log(dig(data, "level3")); // some data
console.log(dig(data, "level4")); // undefined
console.log(dig(dog, "message")); // https://images.dog.ceo/breeds/african/n02116738_1105.jpg

//#Source https://bit.ly/2neWfJ2

const myTry = (obj, target) => obj.find((x) => x == target);
