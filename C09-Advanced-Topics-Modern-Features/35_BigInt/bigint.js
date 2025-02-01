/***************************************************************************
 ****************************** Why BigInt? *******************************
 **************************************************************************/

/*
BigInt is used to work with very large numbers that cannot be represented accurately 
using the standard `Number` type in JavaScript.

Example: 
- The largest safe integer in JavaScript is `Number.MAX_SAFE_INTEGER` (9007199254740991).
- Adding values beyond this range results in precision errors.
*/

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Beyond the safe integer range, precision errors occur:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 (WRONG)
console.log(9007199254740991 + 3); // 9007199254740994
console.log(9007199254740991 + 4); // 9007199254740996 (WRONG)

// Using BigInt eliminates these precision errors:
console.log(9007199254740991n + 1n); // 9007199254740992n
console.log(9007199254740991n + 2n); // 9007199254740993n
console.log(9007199254740991n + 3n); // 9007199254740994n
console.log(9007199254740991n + 4n); // 9007199254740995n

/***************************************************************************
 *************************** Creating BigInts ******************************
 **************************************************************************/

// There are two ways to create BigInts:

// 1. Using the `n` suffix:
const bigNumber = 123456789123456789n;

// 2. Using the `BigInt()` function:
const alsoBig = BigInt("123456789123456789"); // From a string
const fromNumber = BigInt(123456789); // From a number

/**
 * Note: BigInt can only be created from integers. Decimal numbers will throw an error.
 */
// const decimal = BigInt(123.45); // ❌ Error: Cannot convert decimal to BigInt

/***************************************************************************
 *************************** Operations with BigInts ***********************
 **************************************************************************/

// Basic arithmetic operations:
console.log(2n + 3n); // Addition: 5n
console.log(3n * 4n); // Multiplication: 12n
console.log(10n / 3n); // Division (rounds down): 3n
console.log(10n % 3n); // Modulus: 1n

// Mixing BigInt with regular numbers throws an error:
try {
  console.log(2n + 3); // ❌ Error: Cannot mix BigInt and Number types
} catch (error) {
  console.error("Error: Cannot mix BigInt and regular numbers");
}

// To mix, explicitly convert types:
console.log(2n + BigInt(3)); // 5n
console.log(Number(2n) + 3); // 5

/***************************************************************************
 ************************ Real-World Examples ******************************
 **************************************************************************/

// Example 1: Handling Large IDs
class DatabaseRecord {
  constructor(id) {
    this.id = BigInt(id); // Store ID as BigInt
  }

  toString() {
    return this.id.toString(); // Convert to string for display
  }

  equal(other) {
    return this.id === other.id; // Compare IDs
  }
}
/*
const record = new DatabaseRecord("9007199254740993");
console.log(record.toString()); // "9007199254740993"
console.log(record.equal(new DatabaseRecord("9007199254740993"))); // true
*/

// Example 2: Financial Calculations
class LargeMoneyAmount {
  constructor(dollars, cents = 0) {
    this.cents = BigInt(dollars) * 100n + BigInt(cents); // Store as cents
  }

  add(other) {
    return new LargeMoneyAmount(0, this.cents + other.cents); // Add cents
  }

  toString() {
    const wholeDollars = this.cents / 100n; // Extract dollars
    const remainingCents = this.cents % 100n; // Extract cents
    return `$${wholeDollars}.${remainingCents.toString().padStart(2, "0")}`; // Format as string
  }
}
/*
const amount1 = new LargeMoneyAmount(9007199254740991, 5);
const amount2 = new LargeMoneyAmount(5, 5);
console.log(amount1.add(amount2).toString()); // "$9007199254740996.05"
*/

// Example 3: High-Precision Measurements
/*
function measureLongOperation() {
    const start = process.hrtime.bigint(); // Start timestamp

    // Simulate a long operation
    for (let i = 0; i < 1000000; i++) {
        // ...
    }

    const end = process.hrtime.bigint(); // End timestamp
    const duration = end - start;       // Calculate duration

    console.log(`Operation took ${duration} nanoseconds`);
}
*/

/***************************************************************************
 ******************** Comparisons and Type Checking ************************
 **************************************************************************/

// Comparisons:
console.log(2n > 1n); // true
console.log(2n === 2n); // true
console.log(2n == 2); // true (loose equality allows type conversion)
console.log(2n === 2); // false (strict equality checks type)

// Type checking:
const big = 123n;
console.log(typeof big); // "bigint"

// Custom type-checking function:
function isBigInt(value) {
  return typeof value === "bigint";
}

/***************************************************************************
 *********************** Limitations and Gotchas ***************************
 **************************************************************************/

// 1. BigInt does not support decimals:
// const decimal = 1.5n; // ❌ Error

// 2. BigInt cannot use `Math` methods:
// console.log(Math.max(1n, 2n)); // ❌ Error

// 3. BigInt cannot use the unary `+` operator:
// console.log(+1n); // ❌ Error

// 4. Division rounds towards zero:
console.log(5n / 2n); // 2n (no fractional part)

// 5. JSON doesn't support BigInt directly:
const obj = { number: 123n };
try {
  JSON.stringify(obj); // ❌ Throws error
} catch (error) {
  console.log("Can't JSON stringify BigInts directly");
}

/***************************************************************************
 ************************** Best Practices *********************************
 **************************************************************************/

// 1. Use BigInt only when necessary:
const largeNumber = 9007199254740993n; // ✅ Use BigInt for large numbers
const smallNumber = 123; // ✅ Use regular numbers for small values

// 2. Ensure consistent type usage:
const numberValue = 10;
const bigIntValue = 20n;

// Good: Convert all numbers to the same type:
const sum = BigInt(numberValue) + bigIntValue;

// Bad: Mixing types directly causes errors:
// const badSum = numberValue + bigIntValue; // ❌ Error!

// 3. Handle JSON serialization explicitly for BigInt:
const data = { id: 123456789123456789n };

// Custom serialization and parsing:
const serialized = JSON.stringify(data, (key, value) =>
  typeof value === "bigint" ? value.toString() : value
);
console.log(serialized); // '{"id":"123456789123456789"}'

const deserialized = JSON.parse(serialized, (key, value) =>
  /^\d+$/.test(value) ? BigInt(value) : value
);
console.log(deserialized); // { id: 123456789123456789n }
