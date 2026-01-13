//           Object Destructuring 


const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"harsh"
}

// console.log(course.courseInstructor)   to acess the value 

const {courseInstructor }=course 
console.log(courseInstructor); // we dont have to use the fullname that is course.courseInstructor to access it 
// we  rename in the short also to acess it 
const {courseInstructor : instructor }=course 
console.log(instructor);




//                                          about JSON 

// {
//     "naem":"harsh",
//     "age":18
// }

//                      Most APIs return ARRAY OF OBJECTS
[
  {
    "id": 1,
    "name": "Harsh"
  },
  {
    "id": 2,
    "name": "Aman"
  }
]

/*

🔹 How APIs are fetched in JavaScript (BASIC)
Using fetch() (MOST COMMON)


fetch("https://api.example.com/user")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

What is happening?

fetch() → calls API

response.json() → converts JSON → JS object

data → usable JS objec

*/