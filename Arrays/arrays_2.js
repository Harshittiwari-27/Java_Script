/*
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros =["super","batman","flash"]

marvel_heros.push(dc_heros)
// it takes the array inside the array like as the 4th element 
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);


//---------------------------        Concat returns us the new array 
const newArr =marvel_heros.concat(dc_heros)
console.log(newArr);


// --------------------------         Spread
const allNew =[...marvel_heros,...dc_heros]
// console.log(allNew);


// ------------------------------------         flat()
// The .flat() method creates a new array with all sub-array elements flattened (i.e., merged) into it — up to the specified depth.

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]  //  Converts nested arrays → single-level array

// ❗ Interview trick
//flat() removes empty slots too

const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);



// ----------------------------               .isArray()
console.log((Array.isArray("harsh")));



// ------------------------------------     .from()
// ----------------------------------         Convert anything into the array
console.log((Array.from("harsh")))
console.log((Array.from({name:"harsh"})))               // interesting case for interview



// Array.of() creates a new array from the arguments you pass in.
//-------------------------------------         .of()
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


*/


//                  7️⃣ MINI PROJECT EXAMPLE (ARRAY ONLY)
//                      Scenario: Cart Total


// reduce = take many values and reduce them into ONE value

const cart = [
  { name: "Phone", price: 10000, qty: 1 },
  { name: "Charger", price: 500, qty: 2 }
]

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty
}, 0)

console.log(total) // 11000


//                                                              MINI PRACTICE (DO THIS NOW)
//                                Q1️⃣ Count total items
const totalItems = cart.reduce((sum, item) => {
  return sum + item.qty
}, 0)




