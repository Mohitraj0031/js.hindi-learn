
// var c = 300
let a = 500
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "mohit"

    function two (){
        const website = "youtube"
        //console.log(website);
    }
    //console.log(username);

   two()
}
one ()

if(true){
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ********* intresting ***********


function addone(num) {
    return num + 1
}
console.log(addone(5))


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(8))