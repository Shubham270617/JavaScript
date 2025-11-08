//for of loop

const arr = [1,2,3,4,5]

for(const num of arr){ //here aobject(arr) is the one on which the loop is beig carried out 
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('Fr', "France")

console.log(map)

//map are usually know for unique value pair it does not carry out the different value and in the same value

//destructing an array 
for (const [key, value] of object) { //  a good syntax
    console.log(key, ':-', value)
}

//object 

const myObject = { 
    'game1': 'NFS',
    'game2': "RED"
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value)
// }

// when I run the programme the object is iterable to make an object iterable for of loop will not suitable for that so for that we will be using for in loop

for (const key in myObject) {
//   console.log(myObject[key])
console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

// so when we check that for in loop can work on the array also we find that it carry out the key only but in the for of loop we see that we can easily find the value 

//on map also we cannot put the iteration



//for-each loop it only ask the function 

const coding = ["js", "python", "ruby", "cpp"]

// coding.forEach(function (items) {
//     console.log(items)
// })

coding.forEach( (val)=>{
    console.log(val)
} )

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

// it does not carry only the item but also the index and arr

coding.forEach((item,index,arr)=>{
console.log(item,index,arr)
})

//Understanding the flow of iteration on Array and inbuilt object

const myCoding = [
    {
        languageName: "JS",
        languageFileName: "JavaScript"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },

]

myCoding.forEach((item)=>{

  console.log(item.languageName) //this how we can find the object present in the array 
})