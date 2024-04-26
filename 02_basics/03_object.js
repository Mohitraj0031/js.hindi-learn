// singleton 

const mySym = Symbol("Key")

// object literals
const jsUser = {
    name: "Mohit",
    "full name" : "Sharma" ,
    [mySym]: "myKey",
    age: 20,
    locaion: "Jodhpur",
    email: "mohit@google.com",
    isLoggedIn: "false",
}

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.isLoggedIn = "true"
// Object.freeze(jsUser)
jsUser.isLoggedIn = "I don't know";

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

