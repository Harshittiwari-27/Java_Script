// Singleton Objects

// Two ways to declare an Object 
const tinderUser =new Object()  // this is a singleton object
const tinderUser1 ={}


tinderUser.id="12345"
tinderUser.name="harsh"
tinderUser.isLoggedIn=false

console.log(tinderUser1); 
console.log(tinderUser);        //equivalent to   {} 

const regularUser ={
    email :"some@gmail.com",
    fullname :{
        userfullname:
        {
            firstname: "harsh",
            lastname: "tripathi"
        }
    }
}

// fullname? this is what we use when we have call from the API means like.... what if the fullname does not exist then what u will do ? 
console.log(regularUser.fullname?.userfullname.firstname);


// like weh have joined the two arrays in the same way we can also join the two objects 

const obj1 = {1: "a",2:"b"}
const obj2 ={3:"a",4:"b"}
const objj3 = {obj1,obj2}  
console.log(objj3); // gives  object inside object , sames as array inside array
 


// ------------------------------------------- METHOD 3
//                                  const result = Object.assign(target, source);

//  Object.assign() is a built-in JavaScript method used to copy properties from one or more source objects to a target object.
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);


// --------------------------------------------  METHOD 4
//                             Using the spread method 
const obj4={...obj1,...obj2}
//console.log(obj4);

//               when the value comes  from the database then it comes array of objects 

const user =[
    {
        id:1,
        email:"h@gmail.com",
    }
]
    
console.log(user[0].email) // acess the 




// ----------------------------- If want to take all the keys 


console.log(Object.keys(tinderUser)); // keys are returned as strings inside an array

console.log(Object.values(tinderUser));//Returns an array of all the values of the object’s properties.


console.log(Object.entries(tinderUser));  // Returns an array of key-value pairs, where each pair is itself an array [key, value].

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true





//                              Examples to test 

const obj = { a: 1 }
Object.assign(obj, { a: 2 }, { a: 3 })
console.log(obj)  

//Object.assign() copies properties left → right, so the last value wins (a: 3).
