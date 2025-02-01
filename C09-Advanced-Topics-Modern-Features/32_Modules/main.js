// (we'll import here)

/***************************************************************************
 ****************************** Basic Import *******************************
 **************************************************************************/

// Importing the exported functions from the module
import { add, subtract } from "./utils.js";

// Using the imported functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

/***************************************************************************
 ***************************** Default Imports *****************************
 **************************************************************************/

// Importing the default export (Calculator) and a regular export (VERSION)
import Calculator, { VERSION } from "./calculator.js";

// Creating an instance of the imported Calculator class
const calc = new Calculator();

// Using the methods of the Calculator class
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(5, 3)); // Output: 2

// Accessing the imported constant
console.log(VERSION); // Output: "1.0"

/***************************************************************************
 **************************** Renaming Imports *****************************
 **************************************************************************/

// Sometimes names clash, so we can rename them:
import { add as sum, subtract as minus } from "./math.js";

// Using the imported functions
console.log(sum(5, 3)); // Output: 8
console.log(minus(5, 3)); // Output: 2

/***************************************************************************
 ************************ Importing Everything *****************************
 **************************************************************************/

// Importing all exports from a module as a single object
import * as mathUtils from "./mathUtils.js";

// Using the imported functions
console.log(mathUtils.add(5, 3)); // Output: 8
console.log(mathUtils.multiple(4, 2)); // Output: 8
