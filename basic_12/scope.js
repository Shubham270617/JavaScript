

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