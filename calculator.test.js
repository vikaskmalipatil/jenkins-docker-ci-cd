//deccribe()-test plan
//it()/test()-test case
// expect()-assertion


const { add, multiply, divide } = require("./calculator.js");
describe("add feature of calculator", () => {
    test("add 2 positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });
     //expect().toEqual()
         // expect()/toBeTruthy()
         //expect().tpBeFalsy()
         //expect().toBeUndefined()
    test("add 2 negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });
    test("add a positive and a negative number", () => {
        expect(add(2, -3)).toBe(-1);
    });
    test("divide by zero should throw an error", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
    test("multiply 2 numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });
    
});