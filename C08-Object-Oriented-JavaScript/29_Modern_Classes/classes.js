/***************************************************************************
 *************** Classes: A New Way to Write Constructors ******************
 **************************************************************************/
/*
// Our old constructor way
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};
*/
/*
// The new class way - same functionality!
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
// We can also use the class way to create a new user
const user = new User("John Doe", 30);
user.greet();
*/

/***************************************************************************
 **************************** Under the Hood *******************************
 **************************************************************************/

// Classes are just "syntactic sugar" over constructors and prototypes.
/*
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Rex");
const doggo = new Dog("Doggo");

console.log(typeof dog); // object
console.log(typeof Dog); // function -> Constructor

console.log(dog instanceof Dog); // true

console.log(dog.bark === Dog.prototype.bark); // true

console.log(Object.getPrototypeOf(dog) === Dog.prototype); // true

console.log(dog.bark === doggo.bark); // true
*/

/***************************************************************************
 **************************** Class Features *******************************
 **************************************************************************/

// Constructor Method
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed: ${this.speed}`);
  }
}
/*
const car = new Car("Toyota", "Camry");
car.accelerate();
*/

// Class Methods
class Calculator {
  constructor() {
    this.value = 0;
  }

  // These methods are automatically added to Calculator.prototype
  add(x) {
    this.value += x;
    return this; // Allow method chaining
  }

  subtract(x) {
    this.value -= x;
    return this; // Allow method chaining
  }

  getValue() {
    return this.value;
  }
}
/*
const calc = new Calculator();
calc.add(10).subtract(4);
console.log(calc.getValue());
*/

// Static Methods
class MathHelper {
  // Static methods are called on the class, not instances
  static square(x) {
    return x * x;
  }

  static isPositive(x) {
    return x > 0;
  }
}

// Use static methods without creating an instance
console.log(MathHelper.square(5)); // 25
console.log(MathHelper.isPositive(-5)); // false

// This won't work:
//const math = new MathHelper();
//math.square(10); // ERROR

/***************************************************************************
 ****************** Class Properties (Modern JavaScript) *******************
 **************************************************************************/
/*
class Animal {
  // Class properties (not all browsers support this yet)
  species = "unknown";
  isAlive = true;

  constructor(name) {
    this.name = name;
  }

  describe() {
    console.log(`This is a ${this.species} named ${this.name}.`);
  }
}

const animal = new Animal("Rex");
console.log(animal.isAlive); // true
*/

/***************************************************************************
 ****************** Private Fields (Modern JavaScript) *******************
 **************************************************************************/

// Modern JavaScript also supports private fields using #:

class BankAccount {
  // Private Field (Property)
  #balance = 0;

  constructor(initialBalance) {
    if (initialBalance > 0) {
      this.#balance = initialBalance;
    }
  }

  // Private Method
  #logTransaction(type, amount) {
    console.log(`${type}: ${amount}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#logTransaction("Deposit", amount);
  }

  withdraw(amount) {
    this.#balance -= amount;
    this.#logTransaction("Withdraw", amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(2000);
console.log("Balance: ", account.getBalance());
account.deposit(500);
console.log("Balance: ", account.getBalance());
account.withdraw(1500);
console.log("Balance: ", account.getBalance());
// console.log(account.#balance); // Error!
// account.#logTransaction(); // Error!

/***************************************************************************
 ************************** Common Gotchas ********************************
 **************************************************************************/

class Button {
  constructor(text) {
    this.text = text;
    // Wrong way to handle events
    this.element.addEventHandler("click", function () {
      this.handleClick();
    });

    // Right way - use arrow function to preserve 'this'
    this.element.addEventHandler("click", () => {
      this.handleClick();
    });
  }

  handleClick() {
    console.log(this.text);
  }
}
