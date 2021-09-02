// const { getMaxListeners } = require("process");
// const { runInThisContext } = require("vm");

// name, ID, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// getName()
    getName(){
        return this.name;
    }
// getId()
    getId(){
        return this.id;
    }
// getEmail()  
    getEmail(){
        return this.email;
    }
// getRole() returns 'Employee'
    getRole(){
        return "Employee";
    }
}