//  Stack memory and the Heap Memory

// -----------------------   1️⃣ Stack Memory(Primitive)  

//  Primitive values (like numbers, strings, booleans)
//  Function calls and execution context

let myName = "Harsh"
let anothername = "Badkau"
anothername="Harsh_baba"  // yaha pr original value me chnage nhi ho rha hai , yha pr uske copy me change ho rha hai

console.log(myName);
console.log(anothername);



// --------     2️⃣ Heap Memory (Non-Primitive Datatypes)
//  Non-primitive values (objects, arrays, functions)
//  Anything that needs dynamic memory allocation

// anything change in the Heap Memory is the change in the original not the copy here we get the reference not the copy

let userOne ={
    email: "user@gamil.com",
    upi:  "user@ybl"
};

let userTwo = userOne

userTwo.email="harsh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



