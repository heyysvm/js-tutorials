//  O B J E C T S
// Singleton 
// objects.create 

// objects literals 
const mySym = Symbol("key1")

const jsUser = {
    name:"svm",
    "full name" : "Shivam",
    age : 19,
    location : "Noida",
    [mySym]:"mykey1",
    email:"shvam@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// console.log(jsUser);

// Object.freeze(jsUser)

jsUser.email ="hiiii@gmail.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
