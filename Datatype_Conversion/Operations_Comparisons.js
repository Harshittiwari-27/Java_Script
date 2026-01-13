let value =3
let negValue = -value
console.log(negValue);

//------------------------Arithematic -----------------

// console.log("addition of ",2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);

// ----------------- Concatenation ------------------

let str1="hello"
let str2=" Harshit"
let str3=str1+str2
console.log(str3);

// ----------------- Confusing  -------------------------

// meshy codes  alwyas try to use parenthesis that will be executed first


/* 🔑 Rule to remember:

If + sees a string at ANY point → everything becomes string

*/

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4) *5 %3);


//--------------                       BOOLEAN VALUES 

console.log(true);
console.log(+true);
console.log(+"");



//------------- --------About Precedence Operator

let num1 ,num2 ,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);



//-------------------------------- Comparison  Operator
// they give the boolean values


console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2>=1);


// both will give the true values  as they have converted into the nos 
console.log("2" >1);
console.log("02" >1);

// in javaScript aan equality operator works differntly means == and <= ,>= they both work differnet 

// console.log(null >0);
// console.log(null ==0);  // it exactly behaves differntly
// console.log(null >=0);


// --------------------it gives falses with all the dataset
// console.log(undefined==0); 


// ---------------   Strictly checking with the datatype also           ===   

console.log("2" == 2); // true becoz there is conversion of string into no

console.log("2" === 2); // false no conversion of string into no




console.log("" === 0);  // FALSE 
console.log([] == 0);  //    TRUE  [] → "" → 0
console.log([] === 0);   // FALSE 



















/*
3️⃣ ⚠️ null — THE MOST CONFUSING VALUE IN JS
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

✅ Output
false
false
true

null → converted to number

*/


// 5️⃣ == vs ===    No conversion

// Checks value + datatype
// "2" === 2  // false


















