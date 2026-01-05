//  function makeFunc(){
//         const name = "Mozilla";
//         function displayName(){
//             console.log(name);
//         }
//         return displayName;
//     }

//     const myFunc = makeFunc();
//     myFunc();

// use cases of closure nd lexical scope

function clickHandler(color){
    return function(){
        document.body.style.backgroundColor=`{color}`
    }
}

document.getElementById("orange").onclick=clickHandler("orange")
document.getElementById("green").onclick=clickHandler("green")
// 
...