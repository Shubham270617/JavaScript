const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,




    getUserDetails: function(){
        console.log("Returnj Data from the database")
        console.log(this) // here the current object that is being defined upside will be coming it main work is to take the context from the upper side 
    }
}

console.log(user.username);
console.log(user.getUserDetails()) // this keywords means the current context we are talking about

// constructor function

const promiseOne = new Promise() // here the new keyword is the constructor function it means that it allows that from object we can make multiple literals but some places we need new instance like Promise.Date we dont need prvious value keep all the new context there.

function User(username, loginCount, isLoggedIn){
   this.username=username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   return this
}

const userOne = User("Shubham", 90, true)
// here if I passed the new User two and I will put the value then it will completely override it to comeout of that we use constructor function new where vertime we get new instance
console.log(userOne.constructor)

// When we use new keyword the empty object is being created instance 
// call the contsructor function using new keyword
// all the object get inserted in that function 
// we get the value once it get injected.