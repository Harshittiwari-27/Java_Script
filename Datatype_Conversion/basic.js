const accountId=144553   // constant  values  remain fixed they are immutable 

let accountEmail ="harsh@gmail.com"  // let → keyword to declare a variable


accountCity="Jaipur"
var accountPassword ="harsh@123"  // 

// accountId=56
accountEmail=4

// console.log(accountId)
// console.log(accountEmail)

/*
Prefer not to use the var because of issue in block scope and functional scope
*/
 

// const does NOT mean the value is immutable in all cases.
const user = { name: "Harsh" };
user.name = "Rahul"; // ✅ Allowed

// ❗ Only reassignment is blocked, not mutation.








let accountState; // it will give the undefined value → means the variable exists but doesn’t have a value yet.

console.log([accountEmail,accountId,accountPassword,accountCity,accountState, user]);
