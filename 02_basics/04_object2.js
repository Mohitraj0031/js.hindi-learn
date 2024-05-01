//const tindserUser = new Object();
// same same but different the above one is used for singletone 
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Raju"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Raju@google.com",
    fullname: {
        userfullname: {
            firstname: "Raju",
            lastname: "Rajasthani"
        }
    }
    
}
//console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Mohit"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


