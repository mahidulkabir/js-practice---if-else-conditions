// Ticket fare calculator 
let fare = 800;
let age = 80;
const student = false ;

if (student === true){
    fare = fare / 2;
    console.log("You are a student and ");
}else {
    if (age<10){
        fare = 0;
        console.log("You are a child and ");
    }else if (age >= 60){
        fare = fare - fare*(15/100);
        console.log("You are a senior citizen and ");
    }else{
        fare = fare;
        console.log("You are not student and ");
    }
    
}


console.log("Your fare is ", fare)