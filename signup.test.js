const { login, signup } = require("./signup.js");
describe("signup feature of calculator", () => {
    test("signup a new user", () => {
        const result = signup("John Doe", "john@example.com", "password123");
        expect(result.success).toBe(true);
    });
});
describe("login feature of calculator", () => {
    test("login with correct credentials", () => {
        const result = login("john@example.com", "password123");
        expect(result.success).toBe(true);
    });
    test("login with incorrect password", () => {
        const result = login("john@example.com", "wrongpassword");
        expect(result.success).toBe(false);
    });
});