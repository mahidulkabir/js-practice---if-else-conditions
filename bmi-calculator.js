// BMI calculator and Health Category

let weightInKg = 75;
let heightInMeter = 1.7;
let bmi;
bmi = weightInKg / heightInMeter**2;
bmi = parseFloat(bmi.toFixed(2));
console.log("Your BMI result is - ", bmi);

if (bmi < 18.5){
    console.log("You are Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("Your Weight is Normal");
}else if ( bmi >= 25 && bmi <= 29.9){
    console.log("You are Overweight");
}
else {
    console.log("You are obese! Go Get some exercise immediately!")
}