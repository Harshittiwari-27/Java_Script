// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



//                              switch uses strict comparison (===)

const num = "1"

switch (num) {
    case 1:
        console.log("Number one");
        break;

    case "1":
        console.log("String one");          // String one

        break;
}




//              Pro Tip: Better alternative using object (🔥 advanced)

const monthMap = {
    jan: "January",
    feb: "February",
    march: "March",
    april: "April"
}

console.log(monthMap[month] || "Invalid month");
