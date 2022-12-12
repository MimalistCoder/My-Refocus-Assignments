const myFunctions = require("./function");

test("Checks if BMI < 18.5, the prompt displays "You are underweight!"", () => {
    expect(myFunctions.BMIConclusion).toBe(You are underweight);
});