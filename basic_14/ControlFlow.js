
// if

const temperture = 45

if (temperture === 45) { // we see the condition here and write the function which we have cal in the scope
    console.log("less than 45")
}else{
    console.log("Temperature is greater than 50")
}


// See in the above condition there is a part that if the value is true then the confdition will be true and if statemenet will run and if the condition is false then else will be executed


// < (lessthan), >(greaterthan), <=(here it will check whether the value is smaller or equal), == (value true hain ya nahi), !=(not equal ),===(it will check the type also with value,), !== (It will check the negative sign of the value which we can say as a strict check)

if(score>100){
    let power = "fly"
    console.log(`User power ${power}`)
} //this is block scocpe where everything is being noted in the scope all the code are written in the scope only.

//Sort hand notation

const notation = 1000

if (balance>500) console.log("test") //impleciet scope


if (balance < 500) {
    console.log("Less than 785")
}else if (balance < 750) {
    console.log("less than 750")
}else if (balance<900) {
    console.log("less than 1000")
}else{
    console.log("less than 1200")
}

// shopping changes

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // it means that the all the value must be true 
    console.log("Allowed to buy courses")
}else{
    console.log('the user is not allowed')
}

//  if we have to check the multiple condition then we will put down the pipe sign || it is or condition it means eveb if one condition is true the object will work

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In")
}

//Nullish Coalescing Operator (??) : null undefined
 let val1;
 val1 = 5??10
 val1 = null??10
 val1 = undefined??15
 val1 = null??15??20


 console.log(val1)

 //terniary operator

//  consition ? true: false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80")
