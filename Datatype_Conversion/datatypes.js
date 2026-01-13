"use strict"; // treat all JS code as newer version

// alert(3+3)  we are using the nodejs, not the browser

let name="harshit" // it become string as used " "
let age=15      // it becomes the integer as mo is used

let isLoggedIn=false //  boolean datatype



//
console.log(typeof NaN); // output number


/*
Why?
NaN means Not a Number
But it belongs to the number data type
It represents an invalid numeric result

0 / 0      // NaN
"abc" / 2  // NaN

*/



// number => 2 to power 53  max range 
// bigint  we can also use this
// string => " "
// boolean => true/false
// null => standalone value it is a type 
// let state = null  assigned the value null
// undefined =>  eg:  let x ;
// symbol => to find the uniqueness while learn in react


// object

console.log(typeof "name")
console.log(typeof undefined); // undefined
console.log(typeof null); // object




/*
JavaScript is dynamically typed.
Why?
Variable types are determined at runtime
Same variable can hold different types

Example: let x = 10;     // number
x = "Harsh";   // string
x = true;      // boolean

Interview one-liner:

JavaScript is dynamically typed because variable types are decided at runtime, not at compile time.


*/

