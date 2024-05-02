// This refers to the current context 
const user = {
    username:  "mohit",
    price:  149,

    welcomeMessage: function() {
       console.log(`${this.username} welcome to website`)
       console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()
// console.log(this);

// --> further used in DOM manupulation

// function chai (){
//     let username = "mohit"
//     console.log(this.username);
// }
// chai ()

// const chai = function (){
//     let username = "mohit"
//     console.log(this.username);
// }
// chai()

// --> using arrow function
// const chai = () => {
//     let username = "mohit"
//     console.log(this);
// }
// chai()

// Explicit return 
// const addTwo = (num1,num2) =>{
//   return num1 + num2
// }

// Implicit return
const addTwo = (num1,num2) => ({username: "mohit"})
// console.log(addTwo(4,5))

