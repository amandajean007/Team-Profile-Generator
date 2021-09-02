const engineer = require('../lib/Engineer.js');

describe("engineer", () => {
    test("if input is received, an engineer card is made", () => {
        const peterparker = new engineer("peterparker", 4444, "spiderman@marvel.com");
        console.log(peterparker);
    });
});