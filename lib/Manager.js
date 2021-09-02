const Employee = require("./Employee.js");

// Creates Manager class by building off the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
// getRole() returns 'Manager'
    getRole(){
        return "Manager";
    }
}