const employee = require("../lib/Employee.js");

describe("employee", () => {
    test("if input is received, an employee card is made", () => {
        const dianaprince = new employee("dianaprince", 1120, "wonderwoman@marvel.com");
        console.log(dianaprince);
    });
});