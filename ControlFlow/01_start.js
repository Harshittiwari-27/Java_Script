// if 

if(true){  // inside the curly braces that is the scope and if that is true  then only that is going to be executed and 

}

const isUserLoggedIn=true

if(isUserLoggedIn){

}


// Opertors that we use 
// <, >, <=, >=, ==, !=, ===, !==

if(2==="2"){
    console.log("Executed"); // 
    
}
else{
    console.log("Not equal");
    
}


const temp=41
if(temp <50)
{
    console.log("Less than 50");
    
}
console.log("temo is greater than 50 ");



const score = 200

if (score > 100) {
    let power = "fly"                 //   let is block scoped
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);       gives error 


if (balance > 500) {
    console.log("test");
    console.log("test2");
}

//      Single-line if (dangerous style)
if (balance > 500) console.log("test"), console.log("test2");



//                              else if ladder (decision chain)

const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}



const UserLoggedIn=true
const debitCard=true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
    

}


// Logical OR (||) – ANY condition true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



//                                                ✅ Real project example

if (loginViaGoogle || loginViaEmail || loginViaGithub) {
    redirectToDashboard();
}



