class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)  //  it will take this automatically behind the scene.
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`);
        
    }
}

const maxy = new Teacher("max","email@gmail.com","123")
maxy.addCourse()
const spax = new User("shivam")
// spax.addCourse() // not access of the addcourse()
spax.logMe()
maxy.logMe()

console.log(maxy === Teacher); // false 
console.log(maxy === spax); // false 

console.log(maxy instanceof Teacher); // true 
console.log(maxy instanceof User); // true // inherited (teacher from the users)

