let name ="shivam"
const userid = 123321
var pass = "12345"
city = "Delhi"

/* Prefer not to use var because of issue in block scope and functional scope.*/

name = "maxy"
pass = "23123"
city = "noida"
let state;

// console.table() used to make table on console
console.table([name,userid,pass,city])

