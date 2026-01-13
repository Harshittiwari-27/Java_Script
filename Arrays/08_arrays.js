// array 
const myArr=[0,1,2,3,4,5]
const myHeros =["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)  // myArr2 is created using the Array constructor:
// console.log(myArr[1]);  // the second element of myArr
// javascript array.copy.operations create shallow copies 



// Array methods

//-----------------------------------     Push 

myArr.push(6)  // .push() adds a new element to the end of an array.

console.log(myArr[3]);
console.log(myArr);

// -----------------------------------     Pop
myArr.pop();
// console.log(myArr);


myArr.unshift(9) // inserting at the begining and shifting each by  1 but time consuming

myArr.shift() //       removing the inserted element

// console.log(myArr);


// --------------------------------------        Questions Asking
// console.log(myArr.includes(9)); // is it present in the array or not
// console.log(myArr.indexOf(9));   // it will give the  -1;
// console.log(myArr);


// ----------------------The .join() method converts the array into a single string. does not chnage the original array just  join the elements using a comma(,) as a seperator
const newArr =myArr.join() // there will be change in the type 
// console.log(myArr);
// console.log(newArr);
// console.log("after change in the array the values are ",typeof newArr);



//  -------------------- Slice , splice 
console.log("A",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


//              .splice(start, deleteCount) does change in the original array 
//                  delte count means how many  elements to remove i.e. 5
const myn2=myArr.splice(1,5)
console.log(myn2);








