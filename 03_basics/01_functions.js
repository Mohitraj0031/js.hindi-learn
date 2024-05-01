// function addTwoNumbers (number1,number2) {
//      console.log(number1 + number2);    
// }

// addTwoNumbers(2,5)
// addTwoNumbers(5, "a")
//addTwoNumbers(2,"3")
// addTwoNumbers(4, null)

function addTwoNumbers (number1,number2) {
      //let result = number1 + number2
      return number1 + number2
}

 const result = addTwoNumbers(3,5)
 //console.log("Result: ",result);

 function loginUserMessage (username){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
 }

//  console.log(loginUserMessage(""));
 console.log(loginUserMessage());


