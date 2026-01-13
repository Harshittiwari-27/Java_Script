// Correct Ways to Loop over Objects

//                                      for...in is PERFECT for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}



for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}



for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



//                    3. for...in with ARRAY (works, but tricky)

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}



//                          🗺️ 4. for...in with Map