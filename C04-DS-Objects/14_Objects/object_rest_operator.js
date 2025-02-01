/*
 * Rest Operator with Objects
 */

let user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

// Using rest operator
let { name, age, ...rest } = user;
console.log(name); // "John"
console.log(age); // 30
console.log(rest); // { city: "New York", country: "USA" }
