const name="Harshit"
const repoCount =50

// console.log(name + repoCount+"Value");  outdated form 

//   ${variable} to embed values.

console.log(`Hello my name is ${name}  and my repo count is ${repoCount} `);
// ==>  Hello my name is Harshit and my repo count is 10


// one more method to declare the  String
const gameName =new String('harshit-ct')     // typeof gameName   // "object"

// JS creates an object with many built-in properties and methods (like .length, .toUpperCase(), etc.).


console.log(gameName);                        // [String: 'harshitc']
console.log(typeof gameName);                // object
console.log(gameName.length);               // 8
console.log(gameName.toUpperCase());       // HARSHITC
console.log(gameName[0]);                 // 'h'
console.log(gameName.charAt(4));

// to find at which index that  character lies 
console.log(gameName.indexOf('t'));


// ----------------------------------  SubString
// Substring range  cant start the value with the  -ve (-2,4 ) and  always start with the 0 if u give the -ve value then also 
const newString =gameName.substring(0,4)
console.log(newString);
console.log(newString.length);


//  In Slice method in this we can give the negative values 
const anotherString =gameName.slice(-8,4)  // it strts with the back and then give
console.log(anotherString);


// if we dint want extra spaces from the front and the back then use trim
const newStringOne ="   Harshit     "
console.log(newStringOne);
console.log(newStringOne.trim()); 
console.log(newStringOne.trimStart()); 
console.log(newStringOne.trimEnd());  







// To replce the something with something
const url ="https://harsh.com/harsh%27choudhary"
console.log(url.replace('%20' ,'-'))

console.log(url.includes('harsh'));   //  boolean value whether present or not

// Split Method
// split() is a string method that divides a string into an array based on the separator you provide.

const gama="Harsh-chaudhary-pass-ho"
console.log(gama.split("-"));  // we can also give the limit to it













