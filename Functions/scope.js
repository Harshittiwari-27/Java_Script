/*
🌍 Global Scope in JavaScript
A variable declared outside any function or block is in global scope.

✔ Accessible everywhere in the program.

*/

let username = "Harshit"; // global variable

function greet() {
    console.log(username);
}

greet();
console.log(username); // ✔ username is accessible inside & outside the function.



//                          Block Scope (let & const)
let a =100

if(true){
    let a=10
    const b=30
    console.log("Inner :",a);
    
}
console.log("Outer :",a);





function one()
{
    const username="harsh"

    function two ()
    {
        const website ="youtube"
        console.log(username);
        
    }
  //  console.log(website);
    two()
}

one()




function sum(num){
    return num+1
}
sum(2)


const add=function sum(num){
    return num+2
}
add(2)




//                                                              🔹 Hoisting with Functions
//                                           ✅ Function Declaration (Fully Hoisted)

// sayHi(); // works

// function sayHi() {
//     console.log("Hello");
// }




//                       ❌ Function Expression (NOT Hoisted)

// sayHi(); // ❌ error

// const sayHi = function () {
//     console.log("Hello");
// };







