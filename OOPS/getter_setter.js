class User {
    constructor (email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
     set email(value){
         this._email =value 
    }
    get password(){

        return this._password.toUpperCase()  // return as customized when someone accessing the passwords

    }
    set password(value){
      this._password= value  // set as normal pass in databasess 
    }
}

const shivam = new User ("shivam@gmail.com","1abc23")
console.log(shivam.email)