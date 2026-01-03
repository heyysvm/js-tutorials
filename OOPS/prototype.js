// let myName = "Shivam    "

// console.log(myName.truelength);

let myHero = ["Thor","Spiderman"]

let heroPower = {
    thor :"Hammer",
    spider : "sling",

    getSpiderPower : function(){
        // console.log(`spidy power is ${this.spider}`);
        
    }
}
Object.prototype.shivam = function(){
    // console.log(`shivam is present in all object`);   
}

Array.prototype.heyShivam = function(){
    // console.log(`Shivam says susssss`);
    
}

// heroPower.shivam()
// myHero.shivam()
// myHero.heyShivam()
// heroPower.heyShivam()


// inheritance 
const user = {
    name : "max",
    email : "example@123"
}
const Teacher = {
    makeVideo : true 
}

const TeachingSupport = {
     isAvailable : false
}

const TASupport ={
    makeAssignment : "JS Assigment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user

// MODERN SYNTAX 
 
 Object.setPrototypeOf(TeachingSupport,Teacher)

 let anotherUsername = "maxy    "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);  
 }

 anotherUsername.trueLength()
 "shivam  ".trueLength()
 "shivam  ".trueLength()
