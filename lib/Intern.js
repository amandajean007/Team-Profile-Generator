const Employee = require("./Employee.js");

// Creates Intern class by building off the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
// getRole() returns 'Intern'
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;