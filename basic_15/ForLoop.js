// For

for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is the best number");
  } // so here the value is like this that it will print from 1 to 4 then it will move to if statement and then it will check if condition and then it will move next printing 6 to 9
  console.log(element);
}

// here we can say that the devlaraton has been given already with the value of 0 now the loop will be start iterate it will move to next line and check the index and then index ++ and it will print the value

// nested loops

for (let i = 0; i <= 10; i++) {
  console.log(`Outer Loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Outer Loop value: ${j} and inner loop ${i}`)
    console.log(i + "*" + j + "=" + i * j);
  }
}

// so here the execution is simple first the outer loop will run and then it will run 10 times inner loop again it will come outer loop it will run second time adnd then run then mov to inner side it weill ru 10 times again and again it will be moving


let myArray = ["Hanumanjee", "Ramjee", "Shivjee"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        break
    }
    console.log(`value of i is ${index}`)

    // so here the probably we are going to have like this that when the user the for loop will run and when it will check the condition of the index 5 then it will completely stop it will break at line number 39 and comes to 44
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue // here it means it will skip the one part which has to be check in the conditions
    }
    console.log(`value of i is ${index}`)
}