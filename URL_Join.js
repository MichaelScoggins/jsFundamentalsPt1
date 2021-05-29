// Join all given URL segments together, then normalizes the resulting URL

const URL_Join = (...args) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");

console.log(
  URL_Join("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo") // http://www.google.com/a/b/cd?foo=123&bar=foo
);

//#Source https://bit.ly/2neWfJ2
