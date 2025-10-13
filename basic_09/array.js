  // array

  const myArr = [0,1,2,3,4] // array are resizable number basis
  const hero = ["shaktiman", "shubham"]
  const myArr2 = new Array (1,2,3,4)

  console.log(myArr[0]) // accessing the value there are two method shallow copy and deep copy

  //A shallow copy of an array creates a new array, but its nested elements remain references to the original array's elements, meaning changes to these nested elements in the copy also affect the original.
  //Deep copy of an object is a copy whose properties do not share the same reference.

// Array methods

myArr.push(6) //it will add the the new element 
console.log(myArr)

myArr.pop() // it is simple that it will remove the last part of the array no argument is needed
console.log(myArr);

myArr.unshift(8)
console.log(myArr); // in this add the array in front of the array box

myArr.shift()
console.log(myArr) // in this the array will be removed from the first position

console.log(myArr.includes(9)) // it means it will check that whether the array contain the 9 number in that

console.log(myArr.indexOf(9)) // if the value is not present in that it will directly gives -1 that means the data is ot present in the array.

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr); // here the vlue will be string and it will not be in array thismeans that it join the array and converted it into  string.


//slice and splice with intervie question

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

// here the output will be A[0,1,2,3,4,5], B[0,1,2,3,4,5] and myn1 = [1,2] it means that in slice the last part is not included 

const myn2 = myArr.slice(1,3)

console.log(myn2);
console.log("C", myArr);
// in this section the last range will be include so that ouput is [1,2,3] but the most important thing that we have to give the answer in the interview is the output has come out fromm the array and the opriginal array is manipulated so the output is [0,4,5]

const marvel_heros = ["ironman", "hulk", "superman"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros) // the output will be array under array and t will be in the elements 
console.log(marvel_heros);

const alllHeros = marvel_heros.concat(dc_heros)
console.log(alllHeros); // this will give a single array when it is get connected.


// Spread Opertors same as concat but it is more helpful in the used 

const alh = [...marvel_heros, ...alllHeros]
console.log(alh);

//flat this the pont where most extensive and hard thing is solved 

const another_array = [1,2,3,[5,6],7,[8,8,[9,0]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);// the output will be seen as these all array are get connected into single array and the output will be [1,2,3,5,6,7,8,8,9,0]


//the vlaue of the given array will be converted into array

console.log(Array.isArray("Shubham"))// here thye putput will be false
console.log(Array.from("Shubham")); //here the output will be all the writtemn  in array ["S","H","U","B","H","A","M "]

console.log(Array.from({name:"shubham"}))//it is will give empty array

let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1, score2, score3))// it will get converted into array