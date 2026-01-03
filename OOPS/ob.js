const user = {
    username : "SHIVAM",
    loginCount :8,
    SignedIn:true,
    
    getUserDetails: function(){
        // console.log("Got user details from thej databases");
        // console.log(`username ${this.username}`);
        // console.log(this);      
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount , isLoggedIn){
    this.username = username  // this.username is function username 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome $ {this.username}`)
    }
    return this  //  implicitly it will return (not needed to retrun )
}

/*
   -  new keyboard create a empty keyboard => create a new objects 
   -  call a constructor function => this will pack all arguments 
   -   all argument get inject in this keyword
   - we got all values
*/


const userOne = new User("Shivam",12,true)
const userTwo = new User("Max",13,false)
console.log(userOne.constructor);  // [function:user] // reference for its own props
// console.log(userTwo); 

