const user = {
    username: "SHubham Sinha", //here the user ca also cahnage but I want when this user get login then I get the welcome message
    price: "8855",

    welcomeMessage: function(){
        console.log(`${this.username} welocme to the website`) // if we have to access the current context then we always use this keyword which can be access under the keyword means all the things which are present under this scope.
        console.log(this) //it will give the shubham sinha context part means the value of that and also the changed value also 
    } 
}
user.welcomeMessage() //Shubham Sinha welcome to the website
user.username = "Tolu"
user.welcomeMessage()// Tolu welcome to the website 

//here what we see that till line nummber 9 current context is same as it is accessed by the block now in line 10 I have changed the context which is username only so the context (value) is changed.

console.log(this) //here the value will be empty {} as we are in node environment then we are refering to the empty object global


function chai(){
    let username = "Rahul"
console.log(this.username); //if I wil try to print here then I will unable  to call it beacuse we cannot use this in the function part
}
chai()


// Arrow function

const update = () =>{
    let user = "Simran"
    console.log(this.user); // ok here if I will call the this value then it will give me empty value and if we will call with username it will give me the undefined this is because  In a normal function, this is dynamic — it depends on how the function is called.In an arrow function, this is lexically bound — it takes this from its surrounding scope (where it’s defined, not where it’s called).
}

update()


const addTwo = (nom1, num2) => {
 return num1 + num2
}

console.log(addTwo(4,8)) // noraml arrow function where the output will be 12

// Implcit function where the bracket is not needed and we give it in one line here no return keyword is used 
const addTw = (num4, num5) => num4+num5
console.log(add(7,9))

// object return 
const addTwoo = (num4, num5) => ({username: "Sinha"}) // to declare an object it need to wrap in paranthesis
console.log(add(7,9))
