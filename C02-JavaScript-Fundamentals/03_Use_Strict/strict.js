'use strict';

// x = 3.14; // This will cause an error
// console.log(x); // outputs: 3.14

let y = 3.14; // Now variable y is declared 
console.log(y); // outputs: 3.14


function strictFunction()
{
    'use strict';
    let y = 3.14; // FINE
    z = 42; // ERROR
}

strictFunction();