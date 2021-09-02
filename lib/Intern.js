const Employee = require("./Employee.js");

// Creates Intern class by building off the Employee class
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }
// getRole() returns 'Intern'
    getRole(){
        return "Intern";
    }
}