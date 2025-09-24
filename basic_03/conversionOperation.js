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


// ################ Operations ################

let value = 3
let negValue = -value
console.log(negValue) //-3

let str1 = "hello"
let str2 = " Shubham"
let str3 = str1+str2
console.log(str3) //hello Shubham

console.log("1"+2) //12  
console.log(1+"2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

// If the string comes first, everything becomes a string afterwards.
// If the string comes last, earlier additions may stay numeric before coercion.

// tricky conversion

console.log(+true) //1 this is because you have incremented the value here.
console.log(+"")//0 

let gameCounter = 100
gameCounter++
console.log(gameCounter) //101


// Comparison 
// console.log(2>1); 
// console.log(2>=1); 
// console.log(2<1); 
// console.log(2==1); 
// console.log(2!=1); 

console.log("2" > 1) // true here true is coming becuase JS has changed into number automatically
console.log("02" > 1) // true

console.log(null > 0) // false because null is empty value
console.log(null == 0) // false 
console.log(null >= 0) // true

// the reason is that a ewquality check == and comparison > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's wjy (3) null>= 0 is true and (1) null>0 is false. 