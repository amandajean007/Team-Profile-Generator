const manager = require('../lib/Manager.js');

describe("manager", () => {
    test("if input is received, an manager card is made", () => {
        const wandamaximoff = new manager("wandamaximoff", 6666, "scarletwitch@marvel.com");
        console.log(wandamaximoff);
    });
});