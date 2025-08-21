// Conversion of the Operation 
// It is not a single define term but generally refers to one of the concept of switching from one type operation to another.
// Some of the conversion are important because it help us to define the series of all the output. 
// For example you can see here that all the output are different.

let scores = 33;
let score = "33"

console.log(typeof scores); //number
console.log(typeof (score)); //string

let num = null
console.log(typeof num) //0

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) // value of the number is being printed 

let sum = undefined 
console.log(typeof sum)//undefined

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

// "33" => 33
// "33abc"=> NaN
// true=> 1; false => 0