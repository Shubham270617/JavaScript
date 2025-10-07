const name = "shubham"
const repoCount = 10

// console.log(name + repoCount); dont use this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// we can access keyvalue pair by simple method of passong the value in number for example 

const gameName = new String('Gears of war')

console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName[3]);

//we can access protype by typing __proto__

console.log(gameName.__proto__);
console.log(gameName.length);//it will print the length of the string
console.log(gameName.toUpperCase());// it will convert the string into upper case it will not touch the original one only the putput has to be changed.
console.log(gameName.charAt(2));//it will tell us that on which place the character is present 
console.log(gameName.charAt("r"));//it will tell us on which position the charcter is coming

// if we have to substring the value then we can write like this 
const newStr = gameName.substring(0,3)
const newStr2 = gameName.substring(1,4)
console.log(newStr); //the value will be Gea because the value start from 0 and it will not talke the last one if i start from one then it will be 
console.log(newStr2); //ear
// in slice we can put the negative value but in the subscript we cannot put

// trim method is used to trim the value of the to remove unwanted things in the white space
// replace this method is used to replace the value url.replace(from which to replace, what to replace)
// split method is used to split the words one by one it ask for seperators and limit two arguments
