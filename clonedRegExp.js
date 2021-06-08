// Clone a given regular expression

const cloneRegExp = (regExp) => new RegExp(regExp.source, regExp.flags);

const regExp = /lorem ipsum/gi;
console.log(regExp); // {}

const regExp2 = cloneRegExp(regExp);
console.log(regExp2); // {}

//#Source https://bit.ly/2neWfJ2
