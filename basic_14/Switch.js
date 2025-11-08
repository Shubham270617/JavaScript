// to check the multiple values we can use the switch case 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
// key is the value which we have to check so the month we have to check so we will put month there 
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;

    default:
        console.log("default case match")
        break;
}

//break here play an important role because if let there is  not break present then all the code which is in the loop will execute expect default and if the break is present then it will simply get the line which is being check and after break it come out from the loop.

// Ok if we have to comare the value from the string part then we can say it that compare all of them in the string part onl and make sure to take care for case sensitivity


//truth and false value

// Falsy Value
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value
// true, 1, "0", "false", " ",[], {}, function(){}

// to detect the object is empty or not 

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}