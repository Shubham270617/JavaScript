// A Promise is the part that is for future value
//  Pending fulfilled and rejected

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task we can call the database or we can call the cryptography

  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); // connected the .then and setTimeout
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
}); //this connection direct connection with resolve one and we get callback here

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Task is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn task done.....");
});// as we can see that I havent store the function in this we can completely add .then with that


//Let see how the data is being passed using the promise section

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Shubham", email:"shub88510@example.com"})//mainly the data which is passed here will be an object side which can be in the different 
    },1000)
})

promisethree.then(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh", password: "1223322"})
        }else{
            reject("SOmething is wrong")
        }
    },1000)
})


promise.then((user)=>{
    console.log(user)
    return user.username
})

console.log(username);


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password: "122"})
        }else{
            reject("SOmething is wrong")
        }
    },1000)
});

async function consumePromiseFive(){
  try {
    const response = await promiseFive
  console.log(response)
  } catch (error) {
    console.log(error)
  }
}// it will throw the error because this is not stored in the try catch block

consumePromiseFive()

//fetch in the node js is one of the most important and important part in the javascript it is a library. 