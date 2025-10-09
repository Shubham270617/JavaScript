// const score  = 100
// console.log(score); //100

// const balance = new Number(100)
// console.log(balance);// Number 100
// we can change the number into string by the process of like this 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // this will put . after the number and put 00 mainly used in the ecommerce website we can use any number here it will depend upon the data what we have to represent .

// toPrecision it means that it will round off the value completely nd change the value 

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3));


//we can represent the value easily with the help of different but it will give in the usa formate to change it is Indian we just type en-IN

// const hun = 100000
// console.log(hun.toLocaleString('en-IN'));


//  ++++++++++++++++++++++++++ MATHS LIBRARY +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // it will convert -ve into +ve
// console.log(Math.abs(4)); 
// console.log(Math.abs(4.3)); // round off value 4
// console.log(Math.round(4.6)); // round off value 5
// console.log(Math.ceil(4.6)); // round off value 5
// console.log(Math.min(4, 3, 6, 8)); // minimum value and maxium value also 


// mostly we are going to use math.random and the value will always between the 0 and 1

console.log(Math.random());
console.log((Math.random()*10) + 1);// if we multiply the value with 10 then it will shift the value 
console.log(Math.floor(Math.random()*10) + 1) // if you need only one digit 


//formula

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)