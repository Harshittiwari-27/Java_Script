// const cart = function ()
// [
//     {name:"phone ",price:"1000",qty:1},
//     {name :"fan",price:"1500",qty:1}
// ]



function calculatCarPrice(num1)
{
    return num1
}

console.log(calculatCarPrice(5,2,1));


/*
🔹 What is Rest Operator in JavaScript?

👉 The rest operator (...) collects multiple values into a single array.

👉 Here:

...args = rest operator

args = array of all arguments

*/

function myFunc(...args) {
    console.log(args);
}

myFunc(1, 2, 3, 4);      // [1, 2, 3, 4]


//                              INTERVIEW       POV 
function calculatCarPrice(val1,val2, ...num1) // removes those twi
{
    return num1
}

console.log(calculatCarPrice(14,32,21,45,2,1));



const user={
    name:"harsh",
    price:"1000"
}

function handelObject(anyObject)
{
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
handelObject(user)





const arr=[100,200,300]
function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(arr));
