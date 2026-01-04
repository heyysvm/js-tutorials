const User = {
    _email :"eaxmple@gmail.com",   // (underscore define almost its a pvt prop (now it not matters like that))
    _password : "abcd",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const coffee = Object.create(User)    // factory function (.create // also on array )
console.log(coffee.email);  //  _email (doesnt matter because on the way u will do these stuffs with  same references) 
