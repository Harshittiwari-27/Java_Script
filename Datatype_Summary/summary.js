// Primitive types are call by value 

// 7 Types : String , Number, Boolean , null , undefined , Symbol , BigInt


// we dont need to define the data type in the js as it is dynamically typed language

// const score =100
// const scoreValue =100.3
// const isLoggedIn =false
// const outsideTemp =null
// let userEmailId;


// to make some value unique we use the Symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(anotherId);    // => Symbol
console.log(id);
console.log(id === anotherId);    // =>  false




// -------------------------                 Big Number    

// BigInt type that can hold arbitrarily large integers.
const bigNumber = 7854123n




// Reference (Non - Primitive)

// Arrays , Objects , Functions


// ------------------------------------  ARRAYS

// Arrays are ordered lists.
//Elements are accessed by index (starting at 0).

const heros = ["shaktiman", "naagraj", "doga"];


// to acces the element   in the array
console.log(heros[0]); // "shaktiman"



//-------------------------------------  OBJECTS 

// Inside the curly braces, everything is an object (key-value pairs)
// Keys are usually strings, values can be anything.
let myObj = {
  name: "Harshit",
  age: 22
};

// to acces the key value pair  take the obj
console.log(myObj.name); // "Harshit"
console.log(myObj.age);  // 22


//-----------------------------------   FUNCTIONS

const myFunction =function (params) {
    console.log("Hello world");
    
}

//-------------------- calling the function     :
myFunction();               // Output: Hello world
console.log(typeof myFunction);   // output  => function



const arr = ["a", "b", "c"];
arr[0]="c";
console.log(arr.length);
arr.push("d");
console.log(arr);


/*
Q2️⃣ Can array be modified even if declared with const?

➡ YES (because reference is constant, not contents)

const a = [1,2];
a.push(3); // ✅ allowed

*/

