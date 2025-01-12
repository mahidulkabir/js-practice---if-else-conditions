// marksheet generator 
let obtainedNumber = 82;
console.log("Your number is -", obtainedNumber);

    if (obtainedNumber <= 100 && obtainedNumber >= 90){
     console.log("You Got A++");
    } else if (obtainedNumber <= 89 && obtainedNumber >= 80){
        console.log("You Got A");
    } else if (obtainedNumber <= 79 && obtainedNumber >= 70){
        console.log("You Got B+");
    } else if (obtainedNumber <= 69 && obtainedNumber >= 60){
        console.log("You Got B");
    }  
    else if (obtainedNumber <= 59 && obtainedNumber >= 50){
        console.log("You Got C");
    } 
     else if (obtainedNumber <= 49 && obtainedNumber >= 40){
        console.log("You Got D");
    } else {
        console.log("You Got F");
    } 