
function BMICalculator(weight, height){
    let BMI = (weight / (height * height));
if(BMI < 18.5){
        console.log("You are underweight!");
} else if((BMI >= 18.5) && (BMI <= 24.9)){
           console.log("Normal, Healthy Weight Range.");
} else if((BMI >= 25) && (BMI <= 29.9)){
            console.log("Over Weight Range.");  
} else if(BMI >= 30){
            console.log("WTF, Obese!!!");
}
return BMI;
}
console.log(`Your BMI is: ${BMICalculator(40, 1.8).toFixed(2)} \n`);
console.log(`Your BMI is: ${BMICalculator(70, 1.8).toFixed(2)} \n`);
console.log(`Your BMI is: ${BMICalculator(100, 1.8).toFixed(2)} \n`);
