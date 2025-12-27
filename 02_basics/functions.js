// function sayMyName(){
// console.log("S");
// console.log("e");
// console.log("Ss");
// console.log("s");
// console.log("d");
// console.log("g");
// }

// sayMyName()

// function add(num1,num2){
//      let  result = num1+num2
//     return result
// }

// const result = add(3,5)

// console.log(result)

function loginMessage (username){
    if (username===undefined){
        console.log("Please enter a username !!")
        return
    }
    return `${username}just logged in`
}
console.log(loginMessage("shivam"))