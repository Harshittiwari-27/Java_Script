//           this in JavaScript


const user={
    username:"harsh",
    price:999,

    welcomeMessage:function()
    {
        // console.log(this)
        console.log(`${this.username} , welcome to the websit `);
        // this current context ko refer karta hai 
    }
}
user.welcomeMessage()
user.username="Shammmy" // yha change hua 
user.welcomeMessage() // current context  ko fix nhi kiya tha esilye ab change ho jayega 


// In Node.js
console.log(this);               // 👉 {} (module scope)


// In Browser
console.log(this);                // window
  //                                                Importaant

// we canntot directly use this inside the fxn we always use it in the object fxn 

function chai()
{
    let username="harsh"
  //  console.log(this);
  console.log(this.username );          // undefined   
}
chai()


const cap=function ()
{
    let username="harsh"
  //  console.log(this);
  console.log(this.username );          // undefined     
}
cap ()




//                                              ARROW FUNCTION 

const cap2= ()=>       // just remove the woord function and put that =>
{
    let username="harsh"
   console.log(this);       // {} gives empty parenthesis 
  console.log(this.username );     //    undefined     
}
cap2 ()


//                          BASIC ARROW FUNCTION 

// const sum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(sum(3,5))

//                          IMPLICIT ARROW FUNCTION     
const add=(num1,num2)=> num1+num2       // we remove {} & return
console.log(add());








