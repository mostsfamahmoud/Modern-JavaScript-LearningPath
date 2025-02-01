'use strict';

let age = 25;
console.log(age);

age = 26;
console.log(age);

let name = "Mostafa";
console.log(name);

name = "Mahmoud";
console.log(name);

const PI = 3.14159;
console.log(PI);

// PI = 3.14; // ERROR -> Const cannot be reassigned

const person = {
    name: "Mostafa",
    age: 23
};

console.log(person);

person.name = "Mahmoud";
person.age = 60;

console.log(person);

// This would cause an error: Assignment to a constant variable
/* 
person = {
    name: "David",
    age: 30
};
*/

console.log(person);

