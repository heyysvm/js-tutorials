function setUsername (username){
    this.username =username
    console.log("called");
    
}

function createUser (username , email , password){
    // setUsername(username) // it will called but this just give references not hold that it just run that fn call

    setUsername.call(this,username)

    this.email = email 
    this.password = password
}

const max = new createUser ("code","example@123","123")
console.log(max);
