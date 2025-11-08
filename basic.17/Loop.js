const myNums = [1,2,3,4,5,6]

const num = myNums.filter((num)=>num>4) 
console.log(num) //here we found that whene we use filter we can pass the callback and we can accessthe function o each time and condition which are being given

const newNums = []

myNums.forEach((num)=>{
 if (num>4) {
    myNums.push(num)
 }
})

console.log(newNums)

//whenever the scope is used always remeber the return keyword is used always


const oj = [1,2,3,4,5,6]
const object= oj.map((num)=>num+10)
//chaining 
const newOjj = oj
.map((num)=>num*10)
.map((num)=> num+1)
.filter((num)=> num>= 40)

//we can use the map many times measn chaining many times and also we pss the 2nd number in that we can say that the num is being added once


console.log(object)

//map is simple and easy to use 



//reduce
//i reduce we need mainly the current value and the accurate value as there need topass the value
const myNumms = [1,2,3]

// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`acc:${acc} and curval:${curval}`)
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, curval) => acc+curval,0)

console.log(myTotal)