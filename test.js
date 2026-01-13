// let isLoggedIn=44

// let booleanIsLoggedIn =String(isLoggedIn)  //conversion for the boolean
// console.log( typeof booleanIsLoggedIn);
 

// let tc = null;
// console.log(typeof null);
//  console.log("1"+2+"2");

// const newStringOne ="   Harshit     "
// console.log(newStringOne);
// console.log(newStringOne.trimEnd());

// const b="100"
// const bal= new Number(100)
// console.log(typeof b);
// console.log(typeof bal);

// console.log("harshit".toUpperCase().length);


// let str = "harshit";
// str.toUpperCase();
// console.log(str); // "harshit"





// const cart =[
//     {
//         name :"glass", price:100 ,qty:1
//     }
// ]

// const total =cart.reduce((sum,item)=> {
//     return sum+item.price*item.qty
// },0)

// console.log(total)


// const fn = function () {
//   return function () {
//     return "Hello Inner"
//   }
// }

// console.log(fn())


// function add(a, b) {
//   return a + b
// }

// console.log(add)
// console.log(add(2, 3))



// const sayHi = function () {
//   return "Hi"
// }

// console.log(sayHi())





// const user ={
//     name:"Harsh",
//     age:function()
//     {
//         return ("Right to vote ")
//     },
//     work:"teacher"
// }
// console.log(user.work);
// console.log(user.age());



// const obj = { a: 1 }
//  const obj1 = Object.assign({},obj,{ b: 2 }, { c: 3 })
// console.log(obj1)



// const user = {
//   name: "Harsh",
//   age: 21
// }


// const {name, age }=user

// const course = {
//   title: "JS",
//   price: 999
// }

// const { title, price } = course


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5




const map = new Map();
map.set(1, "one");
map.set("1", "string one");

for (const [key, value] of map) {
    console.log(key, value);
}
