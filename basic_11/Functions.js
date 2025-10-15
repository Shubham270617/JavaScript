//calling a function 

function MyName(){
    console.log("S");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
   
}
// if you have to give the refernce the simple call the name MyName and if you have to execute the function you can simply pass the paranthese
// MyName//this is reference
// MyName()//execution

// function addTwoNum(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNum(9,10)
//when we write the function defination we say parameters and when we call the function in that when we put the value is know as arguments


function addTwoNum(num1,num2){
    // let result = num1+num2
    // return result
    // console.log(first)//thi will never execute because once the function is returned after that no execution will take place.

    return num1 + num2
}
const result = addTwoNum(8,9)
console.log("Result :", result)


function loginUserMessage(username){ //here we ca pass the default value also so it will come the same value that is being passsed and no undefined 
    if(username === undefined){ // here is one more method to write (!username)! this will convert true into false and false into true
console.log("Please enter the username")
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("SInha")) The value will be called function and if we have not passed anything as an argumnet then the value will be undefined so for that I am using the if else statement in which we pass the value to check and in the bracket we pass the code to execute the value !this will convert true into false and flase into true

console.log(loginUserMessage()) //but here when we pass the value it will override the default value 