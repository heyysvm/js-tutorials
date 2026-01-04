class User {
    constructor (email,password){
        this.email = email,
        this.password = password
    }
}

const shivam = new User ("shivam@gmail.com","123")
console.log(shivam.password)