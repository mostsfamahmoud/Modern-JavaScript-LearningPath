/***************************************************************************
 ***************************** Default Exports *****************************
 **************************************************************************/

// Default Export: A module can have only one default export.
// It is typically used for the main functionality of the module.

// Exporting a class as the default export
export default class Calculator {
  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    return a - b;
  }
}

// Regular Export: A module can have multiple regular exports.
// This is used for additional utilities or constants.

// Exporting a constant alongside the default export
export const VERSION = "1.0";

// (we'll export from here)
