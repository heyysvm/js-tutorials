// // //  O B J E C T S
// // // Singleton 
// // // objects.create 

// // // objects literals 
// // const mySym = Symbol("key1")

// // const jsUser = {
// //     name:"svm",
// //     "full name" : "Shivam",
// //     age : 19,
// //     location : "Noida",
// //     [mySym]:"mykey1",
// //     email:"shvam@gmail.com",
// //     isLoggedIn : false,
// //     lastLoginDays : ["Monday","Saturday"]
// // }

// // // console.log(jsUser.email)
// // // console.log(jsUser["email"])
// // // console.log(jsUser["full name"])
// // // console.log(jsUser[mySym])
// // // console.log(jsUser);

// // // Object.freeze(jsUser)

// // jsUser.email ="hiiii@gmail.com"
// // console.log(jsUser)


// // jsUser.greeting = function(){
// //     console.log("Hello JS User")
// // }
// // jsUser.greetingtwo = function(){
// //     console.log(`Hello JS User,${this.name}`)
// // }
// // console.log(jsUser.greeting())
// // console.log(jsUser.greetingtwo())


// // const regularUser ={
// //     fullName:{
// //         userFullName:{
// //             firstname : "Shivam",
// //             lastname : "Kumar"
// //         }
// //     }
// // }

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}

// // // const obj3 = {obj1,obj2}
// //  const obj3 = Object.assign = Object.assign({},obj1,obj2)
// //  console.log(obj3);
 
//  // seperator 
// //  const obj3 = {...obj1,...obj2}
// //  console.log(obj3);
 
// const users = [
//     {
//         id :"1",
//         email:"shibam@423gmail.com"
//     },
//      {
//         id :"1",
//         email:"shibam@423gmail.com"
//     },
//      {
//         id :"1",
//         email:"shibam@423gmail.com"
//     },
//      {
//         id :"1",
//         email:"shibam@423gmail.com"
//     }
    
// ]
// console.log(users[1].email)


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructors : "Shivam"
}

const {Instructors} = course 
console.log(Instructors);
