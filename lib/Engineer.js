const Employee = require("./Employee.js");

// Creates Engineer class by building off the Employee class
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }
// getRole() returns 'Engineer'
    getRole(){
        return "Engineer";
    }
}