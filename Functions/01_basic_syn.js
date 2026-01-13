//                      General Function Declaration Syntax

function functionName(parameters) {
    // function body
    return value; // optional
}



// function myname()
// {

// }



function myname() {
    console.log("My name is Harshit");
}

myname();

//                              With Parameters (Most Common)

function myname(name) {
    return `My name is ${name}`;
}

console.log(myname("Harshit"));


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5


function loginUserMessage(username) {
    return `${username} just logged in `
    
}
console.log(loginUserMessage())  // undefined  when no value is passed 
console.log(loginUserMessage("harsh"))



function loginUserMessage(username) {
    if(username===undefined)
    {
        console.log("ENter some name ");
        return //  when this if block is executed, we used return so  no line after this is going to print 
        
    }
    return `${username} just logged in `
    
}
console.log(loginUserMessage())  // undefined  when no value is passed 
