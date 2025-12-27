// // var c =  300

// let a = 300 // global Values

// if (true){
//     // let a = 10   => BLOCK SCOPE
//     // const b = 20 
//     // var c = 30  // it will a
//     // c = 30  //  same as var
// }

// console.log(a);
// console.log(b);
// console.log(c);


//  NESTED FUCNTION 

// function one(){
//     const username = "shivam"

//     function two(){
//         const website = "youtube"
//         console.log(username);     //  child will take variable declaration of parent function
//     }

//     // console.log(website)
//     two()
// }
// one()

if (true){
    const username = "shivam"
    if (username === "shivam"){
        const website ="youtube"
        // console.log(username +website)
    }
    // console.log(website)
}
// console.log(username)


// ****************************************
// addone(5)
// function addone (value){
//     return value+1
// }



// addTwo(5)
// const addTwo = function (num){
//     return num+2
// }
