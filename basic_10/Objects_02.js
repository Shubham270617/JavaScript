// const tin = new Object()  it is singltone object

const tinUser = {} //non singletone object
tinUser.id = "225abc@"
tinUser.email = "shub88510@gmail.com"
tinUser.isLoggedIn = false

// console.log(tinUser);

const regularUser = {
    email: "gmail.com",
    fullName: {
        userfullname: {
            firstName: "Shubham",
            lastName: "Sinha"
        }
    }
}

console.log(regularUser.fullName)// there wull lot of nested user will be find and the data will be simple


//we can combine the objects:

const obj1 = {1: "s", 2: "b"}
const obj2 = {3: "s", 4: "b"}

// const obj3 = Object.assign({},obj1, obj2)
console.log(obj3); //here I have passed the target and source operators 

//mainly we are going to use more and more spread operators

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//arrays having lot of objects here is the eaxample of that:

const obj4 = [
    {
        id:1,
        email:"gmail.com"
    },
    {
        id:1,
        email:"gmail.com"
    },
    {
        id:1,
        email:"gmail.com"
    }
]

users[1].email

console.log(Object.keys(tinUser)); // User has taken all the keys and kleep in the array so that it is easy to noted.
console.log(Object.values(tinUser)); // User has taken all the values and keep in the array so that it is easy to noted.


 const teacher = {
    teacherName: "Maths",
    Price: "2000",
    teacherInst: "Shubham"
 }

 const {teacherInst: inst} = teacher //this is called as destructring the object
 console.log(inst); 
 

 //JSON is having string and the value is also string so both of them are string