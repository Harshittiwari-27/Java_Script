/*
 IIFE in JavaScript (Immediately Invoked Function Expression)
Define a function → execute it immediately → don’t keep it in memory

*/


// function chai()
// {
//     console.log(`DB Connected `);
    
// }
// chai()


(function chai()  // gloabal esko ke pollution ko hatane ke lie IIFe  ka use hua h 

{
    console.log(`DB Connected `);
    
})();

/*
 🔍 Why these parentheses?

(function(){}) → turns the function into an expression

() → immediately invokes (calls) the function

*/



// 🧠 Another Common Syntax (Arrow Function)
//                              UNNAMED IIFE 
(() => {
  console.log("Arrow IIFE executed");
})();


((name) => {
  console.log(`Arrow IIFE executed,${name}`);
})("harsh");
