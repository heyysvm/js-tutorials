//  // function init(){
//     //     var name = "Mozilla";
//     //     function displayName(){
//     //         console.log(name);
//     //     }
//     //     displayName();
//     // }
//     // init();

//     function outer(){
//         let username = "Shivam";
//        // console.log(secret) //  no acess of inner function (child)
//         function inner(){
//             let secret = "my123"
//             console.log("inner",username);   
//         }
//          function inner2(){
//             console.log("inner2",username);  // all child can take acess of outer function declared valriable
//             console.log(secret)  // cant take acess of another child 
//         }
//         inner()
//         inner2()
//     }
//     outer()
//     console.log("Too Outer",username)