//If your BMI is less than 18.5, 
    // it falls within the underweight range. 
//If your BMI is 18.5 to 24.9, 
    // it falls within the normal or Healthy Weight range. 
// If your BMI is 25.0 to 29.9, it falls within the overweight range. 
//If your BMI is 30.0 or higher, it falls within the obese range.

// Assuming the person's weight is 50kg and 1.68m in Height
let weight =100;
let height = 1.72;

const BMI = weight / (height * height); 

function BMIConclusion(BMI){
    if(BMI < 18.5){
        console.log("You are underweight!");
    } else if((BMI >= 18.5) && (BMI <= 24.9)){
       console.log("Normal, Healthy Weight Range.");
    } else if((BMI >= 25) && (BMI <= 29.9)){
        console.log("Over Weight Range.");  
    } else if(BMI >= 30){
        console.log("WTF, You are obese!!!");
       }
}
// manual testing... "CORRECT!"
BMIConclusion(BMI);
console.log(`Your BMI is ${BMI.toFixed(2)} \n`);
// manual testing... "CORRECT!"

console.log('\n Manual Testing...');
console.log(BMI.toFixed(2));


//for automated testing
module.exports = myFunctions;