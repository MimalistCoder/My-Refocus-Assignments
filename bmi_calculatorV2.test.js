const BMICalculator = require("./bmi_calculatorV2");
test("Checks if 40 / (1.8 * 1.8) is 12.345679012345679", () => {
    expect(BMICalculator(40, 1.8)).toBe(12.345679012345679);
});

// gusto ko po sana matest yun exactly lalabas sa console.