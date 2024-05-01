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
 // console.log(loginUserMessage());

// rest operator (...) also known as spread operatot
 function calculateCartPrice(val1, val2,...num1) {
    return num1
 }
 // console.log(calculateCartPrice(4,8,12,16,20));

const user ={
      username: "Raj",
      price: 1499
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 1499
// })

const myNewArray = [200,400,100,250]

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]));

