ES6 

// class user {
//     constructor(username,email,password){
//         this.username = username 
//         this.email =email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const maxy = new user("shivam","email@gmail.com","123")

// console.log(maxy.encryptPassword());
// console.log(maxy.changeUsername());


// BTS  

function User (username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword =  function(){
        return `${this.password}abc`
}
User.prototype.changeUsername =  function(){
        return `${this.username.toUpperCase()}`

}
const coffee = new User("shivam","email@gmail.com","123")

console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());