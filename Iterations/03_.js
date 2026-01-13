// ["", "", ""]         // String inside the array 
// [{}, {}, {}]         // object inside the array 


//                                      SYntax 

// for (const element of iterable) {
//     // use element
// }




//                                   2. for...of with Arrays
let arr=[1,2,3,4,5,6]
for(const num of arr){
    console.log(num);
    
}


//                                           3. for...of with Strings

//                                          📌 Interview Tip:
// 👉 Strings behave like arrays of characters in iteration.

const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}



//                                      4. Map (VERY IMPORTANT)
//                      Keys can be any datatype
const map1=new Map()
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
map1.set('d',4);



const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");             // duplicate 
console.log(map);
// duplicate keys are overwritten 

for (const [key, value] of map) {               // 🔁 Iterating Map using for...of
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

for (const [key, value] of myObject) {      // ❗ Error
}


// TypeError: myObject is not iterable

// 