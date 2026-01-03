const user = {
    username : "SHIVAM",
    loginCount :8,
    SignedIn:true,
    
    getUserDetails: function(){
        console.log("Got user details from thej databases");
        
    }
}
console.log(user.username)
console.log(user.getUserDetails());
