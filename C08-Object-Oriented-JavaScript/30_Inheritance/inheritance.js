/***************************************************************************
 *********************** Understanding Inheritance *************************
 **************************************************************************/

class Animal {
  constructor(name) {
    this.name = name;
    this.energy = 100;
  }

  eat(food) {
    console.log(`${this.name} eats ${food}`);
    this.energy += 10;
  }

  sleep() {
    console.log(`${this.name} sleeps`);
    this.energy += 20;
  }

  makeSound() {
    console.log(`${this.name} makes a generic sound`);
    this.energy -= 3;
  }
}
/*
class Dog extends Animal {
  // JavaScript automatically creates this constructor:
  // constructor(...args) {
  //     super(...args);
  // }

  bark() {
    console.log(`${this.name} barks: Woof!`);
    this.energy -= 5;
  }
}

const rex = new Dog("Rex");

console.log(rex.name); // "Rex"
console.log(rex.energy); // 100
rex.eat("kibble"); // "Rex eats kibble"
console.log(rex.energy); // 110
rex.bark(); // "Rex barks: Woof!"
console.log(rex.energy); // 105
*/

/***************************************************************************
 *********************** Understanding Inheritance *************************
 **************************************************************************/

class Dog extends Animal {
  // JavaScript automatically creates this constructor:
  // constructor(...args) {
  //     super(...args);
  // }

  // Our own constructor
  constructor(name, breed) {
    // Must call super constructor in derived class
    // before accessing 'this' or returning from derived constructor
    super(name); // Call parent constructor first!

    this.breed = breed; // Then add dog-specific properties
  }

  bark() {
    console.log(`${this.name} the ${this.breed} barks: Woof!`);
    this.energy -= 5;
  }
}

//const rex = new Dog("Rex", "German Shepherd");

// Under the hood:
// 1. Dog constructor starts
// 2. super(name) calls Animal constructor
//    - Creates the base object
//    - Sets name and energy
// 3. Dog constructor continues
//    - Sets breed
// 4. Object is fully created

//console.log(rex);
/* Output shows the final object:
Dog {
    name: "Rex",
    energy: 100,
    breed: "German Shepherd"
}
*/

/***************************************************************************
 ************************* Using super in Methods **************************
 **************************************************************************/

// Bad approach: Completely replacing the parent's method
class Dog1 extends Animal {
  makeSound() {
    // We lost all the parent's functionality!
    console.log(`${this.name} barks: Woof!`);
    // We even forgot to reduce energy!
  }
}

// Good approach: Extending the parent's method
class Dog2 extends Animal {
  makeSound() {
    super.makeSound(); // First do what animals normally do
    console.log(`${this.name} barks: Woof!`); // Then add dog-specific behavior
    this.energy -= 2; // Extra energy cost for barking
  }
}

/*
const rex1 = new Dog1("Rex");
const rex2 = new Dog2("Rex");

rex1.makeSound(); // Rex barks: Woof!
console.log(rex1.energy); // Still 100! The energy reduction was lost

rex2.makeSound();
// Rex makes a generic sound
// Rex barks: Woof!
console.log(rex2.energy); // 95
*/

/***************************************************************************
 ************************* Multi-level Inheritance *************************
 **************************************************************************/

class PoliceDog extends Dog {
  constructor(name, breed, badgeNumber) {
    super(name, breed);
    this.badgeNumber = badgeNumber;
    this.trained = true;
  }

  trackSuspect(suspectName) {
    if (this.energy < 30) {
      console.log(`${this.name} is too tired to track ${suspectName}.`);
      return;
    }
    console.log(`${this.name} is tracking ${suspectName}.`);
    this.energy -= 25;
  }
}
/*
const max = new PoliceDog("Max", "German Shepherd", "K9-123");

// Max has access to all methods up the chain:
max.eat("special K9 food"); // From Animal
max.bark(); // From Dog
max.trackSuspect("suspect"); // From PoliceDog

console.log(max);
*/

/***************************************************************************
 *********************** When Inheritance Goes Wrong ***********************
 **************************************************************************/

/**
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }

    move() {
        console.log(`Moving at ${this.speed} mph`);
    }
}

// Seems fine at first...
class Car extends Vehicle {
    constructor(speed) {
        super(speed);
        this.wheels = 4;
    }
}

// But then...
class Boat extends Vehicle {  // Uh oh...
    constructor(speed) {
        super(speed);
        this.propellers = 1;
    }
    // A boat doesn't really need wheels...
}

// And it gets worse...
class Airplane extends Vehicle {  // This is getting messy
    constructor(speed) {
        super(speed);
        this.wings = 2;
        // What about propellers?
        // What about wheels (some planes have them)?
    }
}

  */

// This is where composition becomes useful.
// Instead of inheritance, we can compose objects from smaller, focused pieces:

// Create specific behaviors

const canMove = {
  move() {
    console.log(`Moving at ${this.speed} mph`);
  },
};

const canFly = {
  fly() {
    console.log(`Flying at ${this.speed} mph and ${this.altitude} feet`);
  },
};

const canFloat = {
  float() {
    console.log(`Floating in water`);
  },
};

// Now we can mix and match

class Car {
  constructor(speed) {
    this.speed = speed;

    // Add moving capability
    Object.assign(this, canMove);
  }
}

class Boat {
  constructor(speed) {
    this.speed = speed;

    // Add moving and floating capabilities
    Object.assign(this, canMove, canFloat);
  }
}

class AirPlane {
  constructor(speed, altitude) {
    this.speed = speed;
    this.altitude = altitude;

    // Add moving and flying capabilities
    Object.assign(this, canMove, canFly);
  }
}

const car = new Car(60);
const boat = new Boat(40);
const plane = new AirPlane(500, 30000);

car.move(); // "Moving at 60 mph"
boat.move(); // "Moving at 40 mph"
boat.float(); // "Floating in water"
plane.fly(); // "Flying at 500 mph and 30000 feet"
