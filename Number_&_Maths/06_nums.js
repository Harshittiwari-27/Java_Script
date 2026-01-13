//-------------------------     About  Numbers

const score="400"
const sc=Number(score)
console.log(typeof score);

const balance =new Number(100)
console.log(balance);  // (showing that it's a Number object wrapping the value 100).

console.log(balance.toString().length); 
//balance.toString() → converts the number 100 into a string, "100".
//"100".length → counts how many characters are in that string → 3.



// .toFixed(n) is a Number method that converts a number to a string, keeping exactly n digits after the decimal point.
console.log(balance.toFixed(2)); //  ==> "100.00"
// The result is a string, not a number.


// ----------------------------- Precision Value 

//  It returns a string.
// .toPrecision() counts all significant digits (before and after the decimal).
//The result is always a string, not a number.
const otherNumber =23.8966
const otherNumber2 =123.8966
const otherNumber3 =1123.8966
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));
// console.log(otherNumber3.toPrecision(3));


const hundreds =1000000
// console.log(hundreds.toLocaleString());



// -------------------------     Maths

console.log(Math);
console.log(Math.abs(-4));  // absolute chnage -ve into +ve
console.log(Math.round(4.6));
console.log(Math.ceil(4.3)); // takes the highest value 
console.log(Math.floor(4.9)); // takes the lowest value

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max =20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
 
 







