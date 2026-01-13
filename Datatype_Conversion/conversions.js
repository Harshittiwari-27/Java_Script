let score = 33   // check also for boolean like true , false , undefined

console.log(typeof score); // check the datatype of the score  we dont known what the frontend user gave to us


///-  second way to  check the type  -

let scorre = "33"
console.log(typeof(scorre));         // ----->> Output =  "String" 

let valueInNumber = Number(score)    // changed into the number conversion done
console.log(typeof(valueInNumber)); 


//------------------ if someone gave the no in string mixed with no 
 
let sc="33abc"
let scVal=Number(sc)
console.log(scVal);                  // NaN  -- not a number 
console.log(typeof(scVal));         // Output ="Number"  that shouldnt be


//------------------------------------

let tc=null
console.log(typeof null);
let tcVal=Number(tc)             // Converting null to a number: Number(null) → 0
console.log(tcVal)              // it is a number 
console.log(typeof(tcVal));     

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


//----------- Conversion of the Boolean Values -------------------------

let isLoggedIn=1

let booleanIsLoggedIn =Boolean(isLoggedIn)  //conversion for the boolean
console.log(booleanIsLoggedIn);
 
// when we write :
// 1 => true;  0 =>false   "harshit" => true
// " " => false

let someString =33
console.log(typeof (someString));

let someStrinnng =String(someString)  // String() function converts a number to a string.

console.log(typeof someStrinnng);   // output => "string"



/*  Boolean conversion rules


| Value               | Boolean Result |
| ------------------- | -------------- |
| `1`                 | `true`         |
| `0`                 | `false`        |
| `"harshit"`         | `true`         |
| `""` (empty string) | `false`        |
| `" "` (space)       | `true`         |
| `null`              | `false`        |
| `undefined`         | `false`        |


*/