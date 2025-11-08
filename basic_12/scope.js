

if(true){
let a = 10
const b = 20

} //this is called scope

console.log(a); //this will not execute
console.log(b); //this will not execute
console.log(c); //this will execute

//let and const are block scope varible it means tthat it must be defined in the scope part only if it is passed outside the scope variable then it will never be executed.

// on other hand var is the global variable it can be defined anywhere 

function one(){
    const username = "Shubham"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)

    two()
}
one() 


//++++++++++++++++++++ interseting +++++++++++++++++

example(5)
function example(value){
    return value + 1
}


example2(5)
const example2 = function(num){
 return num + 2
}

//Lets see the both the example you will find that in the first example there will be no error because in that we have declared the function directly but in second part we will be getting an error because we have declared it but we have stored in the variable.