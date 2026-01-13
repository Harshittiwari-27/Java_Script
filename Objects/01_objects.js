//  An object is a collection of key–value pairs
// two methods to declare and object one is the literal another one is constructor

// singleton
// Object.create


// object 

const mySym = Symbol("Key1")   // Very Imp -- how to declare the Symbol
const mySym1 = Symbol("Key2")  


// This is my object  literals

const JsUser={ name:"Harsh",  age:18, location:"Prayag",
    "fullName":"Harshit Tiwari",email:"harsh@gmail.com" ,
    mySym:"myKey1", [mySym1]:"Key2",
    isLoggedIn:false, lastLoginDays:["Monday","Saturday"]}

//                   🧱 2. Accessing Object Properties

//                             ✅ Dot notation
// console.log(JsUser.email);

//                             ✅ Bracket notation
// if we have to access the full name we can be able to do that by the help of dot notation
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser.mySym); // its showing string but we want as Symbol
// console.log( JsUser[mySym1]); // now it will act like a symbol
// console.log( typeof JsUser[mySym1]);


// Suppose this is your object
const JsUser1 = {
  name: "Harsh",
  email: "har@gmail.com",
};

// 🔹 You modify a property
JsUser.email = "har-har@gmail.com";  // ✅ Works fine — property updated

// 🔹 Freeze the object
Object.freeze(JsUser1);

// 🔹 Try modifying again
JsUser.email = "syntax@gmail.com";   // ❌ Ignored
// console.log(JsUser1);




// Correct Way to Call a Function
// ✔ Just call the function directly

const user = function () {
    return "Hello world"
}
console.log(user())   // ✅ correct

// Functions are objects, but they are CALLED directly



JsUser.greeting=function()
{
    console.log("Hello Js User ");
    
}

JsUser.greetingTwo=function()
{
    console.log(`Hello Js User,${this.name}` ); // this is known as String Interpolation
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





                        // Example  Function inside Object (Methods)
const user2 ={ 
    name:"Harsh",
    age:function()
    {
        return ("Right to vote ")
    },
    work:"teacher"
}
console.log(user2.work);
console.log(user2.age());



