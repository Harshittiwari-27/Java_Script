// console.log('initalization complete ', Temporal.Now.instant());

console.log('initialization complete', new Date().toISOString());


//        Date is an Object in the JavaScript 

let myDate =new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate =new Date(2023,0,23) // Months starts with 0 in the JS
console.log(myCreatedDate.toDateString());


let myCreatedDate1 =new Date(2023,0,23,5,3) // 2nd format 
console.log(myCreatedDate1.toLocaleString()); 

let myCreatedDate3 =new Date("2023-01-14") // yy-mm-dd
console.log(myCreatedDate3.toLocaleString()); +



// ---------------->                          Time Stamp
// when designing the quizess and all then deciding who has given the faster poll

let myTimeStamp =Date.now() // it will give in milisecond
console.log(myTimeStamp);

// the date is the object so whatever the date we  have created  it will give the time of that 
console.log(myCreatedDate3.getTime());  // these concept used in making the hotel app and all at that time u will compare the date and the time and hour


// if want to convert that into the seconds
console.log(Math.floor(Date.now()/1000));


let newDate=new Date() // it does not give much info
console.log(newDate);  //  there are other methods u can get by putting dot like getmonth,time,sec, year and so on

console.log(newDate.getMonth()+1); 
console.log(newDate.getDay()); 

newDate.toLocaleString('default',{
    weekday:"long",
   
})


