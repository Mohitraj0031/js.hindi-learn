// Immediately invoke function expression(IIFE)


// *** traditional way to call function
// function chai(){
//     console.log(`database connected`);
// }
// chai()

// the function is called inside a paranthesis () to avoid globle scoop pollution
// known as IIFE  
(function chai(){
    console.log(`database connected`);
})(); // this semi-colon is very important here because it tells the compilore to stop this function here and move to other.

// function is called using arrow function 
((name) => {
    console.log(`database connected two ${name}`);
})('mohit')