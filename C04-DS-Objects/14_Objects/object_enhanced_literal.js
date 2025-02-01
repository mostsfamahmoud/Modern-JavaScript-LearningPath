/*
 * Enhanced Object Literals
    - Property Shorthand
    - Method Shorthand
    - Computed Property Names
 */

/**************** Property Shorthand *****************/

/*
 * Before ES6

let user1 = {
  name: name,
  age: age,
};

 */

// After ES6

let name = "John";
let age = 25;

let user1 = {
  name, // same as name: name
  age, // same as age: age
};

/**************** Method Shorthand *****************/

/*
 * Before ES6

let user1 = {
    sayHi: function () {
      console.log("Hi!");
    },
  };

 */

// With ES6
let user2 = {
  sayHi() {
    // no need for 'function' keyword
    console.log("Hi!");
  },
};

/**************** Computed Property Names *****************/
let propName = "age";
let prefix = "user";

let user = {
  [propName]: 30, // use variable as property name
  [prefix + "Id"]: 1, // compute property name
  ["get" + propName.toUpperCase()]() {
    // computed method name
    return this[propName];
  },
};

console.log(user.age); // 30
console.log(user.userId); // 1
console.log(user.getAGE()); // 30
