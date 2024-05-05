// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "Uited States of America")
map.set('Fr', "France")

//console.log(map);
// Unique values print in output in the same order as it was given

for (const [key,value] of map) {
    console.log(key,':-' , value);
}
