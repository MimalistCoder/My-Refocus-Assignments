const bmi_calculator = require("./bmi_calculator");

test("Checks if BMI < 18.5, the prompt displays You are underweight!", () => {
    expect(BMIConclusion.bmi_calculator).toBe("You are underweight!");
});