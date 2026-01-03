const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, Cryptography , network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
       resolve()    
},1000)
}).then(function(){
    console.log("Async 2 resolve");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"shivam",email:"shivam@example.com"})
    },1000)
})


promiseThree.then(function(user){
  console.log(user);
  
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error){
            resolve({username:"Shivam",password:"123"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username    
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>console.log("Promise is either ressolved or rejected"))


const promiseFive = new Promise (function (resolve , reject){
    setTimeout(function(){
    let error = true 
    if (!error){
        resolve({username:"shivam",password:"34334"})      
    }else{
        reject("ERROR : JS went wrong")
    }
    },1000)
})

async function consumePromiseFive(){
    try{
            const response = await promiseFive
    console.log(response);
    }
   catch(error){
    console.log(error);
    
   }
    
}
consumePromiseFive()


// async function getAllUser(){
//     try{
//         const response = await fetch("url")
//             const data = response.json()
//             console.log(data);
//     }
//     catch(error){
//             console.log("E: ",error);
            
//     }
    
// }
// getAllUser()

fetch("url")
.then ((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(erro r));
 