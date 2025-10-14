// singleton - when we declare in literals then singleton is not made

//object literals

const JsUser = {
    name: "Shubham",
    Salary: "160000",
    Company: "Jetquin.me"
}
// the vale of object is being accesssed by the dot notation and if we have to change the object value we can pass it by = .
console.log(JsUser); //{ name: 'Shubham', Salary: '160000', Company: 'Jetquin.me' }

console.log(JsUser.Salary);
console.log(JsUser["Salary"]);
JsUser.Salary = "250000"
Object.freeze(JsUser) // it will free the object 
JsUser.Salary = "2000000"

//we can manage the function in object value

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting)// undefined
console.log(JsUser.greeting())// Hello Js User