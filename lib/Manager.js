const Employee = require("./Employee.js");

// Creates Manager class by building off the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficenumber() {
        return this.officeNumber;
    }
// getRole() returns 'Manager'
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;