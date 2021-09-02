// const fizzBuzz = require('../fizz');
const Manager = require('../lib/manager.js');
// const managerTest = new Manager("Amanda McBee", "") 

describe('Manager class', () => {
  it('Should create a Manager instance with the provided paramaters', () => {
    const managerTest = new Manager("Amanda McBee", 69, "coolcodergirl@gmail.com", 101);
    expect(managerTest.name).toBe("Amanda McBee"); 
  });
});


