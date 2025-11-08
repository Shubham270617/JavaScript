// IIFE Immediately Invoked Function Expression
//  (IIFE)

(function update(){
    //named iife
    console.log('DB Connected')
})(); 

// ()this is the place where we are going to write the function the (this is the place where we are going to execute the function call)

// The pollution which is being spread by the global scope so for removing that global scope pollution means the decleration we are using the IIFE 

// we can also decleare the IIFE by adding the arrow function only we need to put the semiclon as the code which is declared must know where to stop the execution 

( (name) =>{ //arugument
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ('shubham') //parameter