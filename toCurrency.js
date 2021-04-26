// Write a JavaScript program to create a specified currency formatting from a given number.
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n);

console.log(toCurrency(123456.789, "EUR")); // currency: Euro | currencyLangFormat: Local // €123,456.79
console.log(toCurrency(123456.789, "USD", "en-us")); // currency: US Dollar | currencyLangFormat: English (United States) // $123,456.79
console.log(toCurrency(123456.789, "USD", "fa")); //currency: US Dollar | currencyLangFormat: Farsi // ‎$۱۲۳٬۴۵۶٫۷۹
console.log(toCurrency(322342436423.2435, "JPY")); //currency: Japanese Yen | currencyLangFormat: Local // ¥322,342,436,423
console.log(toCurrency(322342436423.2435, "JPY", "fi")); //currency: Japanese Yen | currencyLangFormat: Finnish // 322 342 436 423 ¥

//#Source https://bit.ly/2neWfJ2

// this is a pretty useful utility/function
