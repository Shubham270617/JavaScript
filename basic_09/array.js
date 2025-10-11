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

myArr.pop() // it is simple that it will remove the last part of the array
console.log(myArr);

myArr.unshift(8)
console.log(myArr); // in this add the array in front of the array box


