const intern = require('../lib/Intern.js');

describe("intern", () => {
    test("if input is received, an intern card is made", () => {
        const tonystark = new intern("tonystark", 1111, "ironman@marvel.com");
        console.log(tonystark);
    });
});