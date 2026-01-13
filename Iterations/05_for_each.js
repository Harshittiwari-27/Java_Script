const coding = ["js", "ruby", "java", "python", "cpp"]

//console.log(coding.length)

//It executes a callback function once for each element
coding.forEach(function (val) {      // val → current element
    console.log(val);
})



//                      ✔ Arrow function (modern & preferred)

coding.forEach((item) => {   //✔ Used in real projects
    console.log(item);
})


//  Passing a function reference      This is called callback function passing
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)  // we have not call printMe()   => You only pass its reference





//                      REAL IMPORTANT PART — Array of Objects (🔥 very common)
//         This is exactly how API data comes in real apps.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(function (item){
    console.log(item);
    
})

myCoding.forEach((item) => {
    console.log(`${item.languageName} is ${item.languageFileName}`);
})
