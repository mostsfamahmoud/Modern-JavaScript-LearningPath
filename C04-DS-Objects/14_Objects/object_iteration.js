/*
 * Iterating Over Object Properties
    - Using for...in Loop
    - Using Object Methods for Iteration
 */

let user = {
  name: "John",
  age: 30,
  city: "New York",
};

/************** Using for...in Loop **************/
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

/************** Using Object Methods for Iteration **************/
let product = {
  name: "Laptop",
  price: 999,
  inStock: true,
};

// Object.keys()
Object.keys(product).forEach((key) => {
  console.log(`${key}: ${product[key]}`);
});

// Object.values()
Object.values(product).forEach((value) => console.log(value));

// Object.entries()
//console.log(Object.entries(product));

Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
