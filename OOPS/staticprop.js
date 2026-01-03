class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }

}

const shivam = new User("shivam")
// console.log(shivam.createId());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email 
    }
}

const android = new Teacher ("Android","phone@gmail.com")
android.logMe()
console.log(android.createId());  // after using static child will not access the method of its inheritence.

