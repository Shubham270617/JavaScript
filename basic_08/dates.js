// Dates

let myDate = new Date();
console.log(myDate) //2025-10-09T08:05:05.461Z this is uredable 

//Now change the date to string and you will find that we can read that easily
console.log(myDate.toString()); // it will represent you like this Thu Oct 09 2025 13:35:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Thu Oct 09 2025
console.log(myDate.toLocaleString()); // 9/10/2025, 1:36:37 pm
console.log(typeof myDate) // object

let myCreatedDate = new Date(2025, 9, 8); // always remeber the month is start from 0 
console.log(myCreatedDate.toString()); // Wed Oct 08 2025 00:00:00 GMT+0530 (India Standard Time)

//YYYY-MM-DD
let myDates = new Date("10-09-2025") // 9/10/2025, 12:00:00 am
console.log(myDates.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); //1759998297984
// when we have to compare the date theh we use this method
console.log(myCreatedDate.getTime()); // value is this 1759861800000 so when we are making a room hotel application to caluclate the date and time there we use it mainly

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
 weekday:"long",
 calendar: "July"
})

