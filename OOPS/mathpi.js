const descripter  = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const maxy = {
    name : "shivam",
    rating:4,
    isAvailable:true,
    order:function(){
        console.log("not workedd");      
    }
}

// console.log(Object.getOwnPropertyDescriptor(maxy,"name"));

// Object.defineProperties(maxy , {
//     // name  : {
//     //     enumerable : false 
//     // },
//     // rating:{
//     //     enumerable:false
//     // },
//     // isAvailable:{
//     //     enumerable:false
//     // }
// })

// Object.defineProperties(maxy , "name" ,{descripor})   syntax for one prop

// Object.defineProperties(maxy , {"key": {descriptor}, "key2": {descriptor} })



console.log(Object.getOwnPropertyDescriptor(maxy,"name"));

for (let [key,value] of Object.entries(maxy)) {
    if ( typeof value !== 'function'){
    console.log(`${key}:${value}`); 

    }
}