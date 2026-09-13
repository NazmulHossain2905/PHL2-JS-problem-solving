// ===================================== PHL1FPA1 / PHNLFPA1 / PHL2A1

// Question 1: Value Detective · 10 marks

const describeValue = (value) => {
  const typeOfValue = typeof value;
  const truthyOrFalsy = Boolean(value) ? "truthy" : "falsy";

  return `${typeOfValue} | ${truthyOrFalsy}`;
};

console.log(describeValue("hello") === "string | truthy" ? "Passed" : "Failed");
console.log(describeValue("") === "string | falsy" ? "Passed" : "Failed");
console.log(describeValue(25) === "number | truthy" ? "Passed" : "Failed");
console.log(describeValue(0) === "number | falsy" ? "Passed" : "Failed");
console.log(describeValue(true) === "boolean | truthy" ? "Passed" : "Failed");
console.log(describeValue(null) === "object | falsy" ? "Passed" : "Failed");
console.log(
  describeValue(undefined) === "undefined | falsy" ? "Passed" : "Failed",
);

console.log(describeValue("0")); // "string | truthy"
console.log(describeValue(NaN)); // "string | truthy"

// console.log(describeValue("hello")); // "string | truthy"
// console.log(describeValue("")); // "string | falsy"
// console.log(describeValue(25)); // "number | truthy"
// console.log(describeValue(0)); // "number | falsy"
// console.log(describeValue(true)); // "boolean | truthy"
// console.log(describeValue(null)); // "object | falsy"
// console.log(describeValue(undefined)); // "undefined | falsy"
