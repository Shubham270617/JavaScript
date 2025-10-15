//when we make a shopping card the user used can put as number of as product in the card so we dont know so in that sitution we can have the argument so the parameter will be rest operator

function calculatePriceCard(val1, val2, ...price){ //this is rest operator
 return price
}

console.log(calculatePriceCard(400,6000,8000)) //value will be in array 
//in the above function we can see that the output will be only 8000 because the first val1 = 400 val2 = 6000.

//how to passaan object in the function 

const user = {
    name: "Shubham",
    occupation: "SDE"
}

function handleUser(anyobject){ //so when we pass we have to access the user by placing the .sign 

    console.log(`Username is ${anyobject.name} and the occupation is ${anyobject.occupation}`)
}

handleUser(user) //here I have pass the object only

//Passing an array

const prices = [100,2000,3000]

function handleArray (getArray) {
 return prices[2]
}

console.log(handleArray(prices))