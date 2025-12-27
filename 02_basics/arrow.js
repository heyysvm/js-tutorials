// const user = {
//     username :"Shivam",
//     price : 99,

//     welcomeMessage : function(){
//         console.log(this);
        
//         console.log(`${this.username}, welcome to Website !!`)  // this refers current context .
//     }

// }

// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "shivam"
//     console.log(this.username) // undefined , because this only works with object not with functions 
// }
// chai()

// const chai = () => {
//     let username = "shivam"
//     console.log(this)
// }
// chai()


// const addTwo = (num1, num2) =>  num1+ num2   //  no need of return statement  // implicit return // explicit return means using return statement

// const addTwo = (num1, num2) => ({username:"shivam"})  // for returning object parantheses is must 

// console.log(addTwo(3,4))


// const myArray = [2,3,4,5,6]
// myArray.forEach(()=>())