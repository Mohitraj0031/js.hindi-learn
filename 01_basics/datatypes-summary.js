// Primitive datatypes

// 7 types : String , Number, null, boolean,symbol, undefined, bigInt

const score = 100
const scoreVlaue = 100.2
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1364631344313136544n

console.log(typeof isLoggedIn);




// Non primitive or Reference

// Array, object, functions

// Return type
// String => string
// Number => number
// null => object
// true/flase => boolean
//symbol => symbol
//bigInt => bigInt
//Array => object
//object => object
//function => object function

// *******************************************************************

// Stack (primitive), Heap (non-primitive)
// Stack => copy of data
// Heap => reference 0f data

let myYoutubename = "Mohitrajdotcom"

let anothername = myYoutubename
anothername = "do_or_die"
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mohitraj@google.com"


console.log(userOne.email);
console.log(userTwo.email);
