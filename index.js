const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const jest = require('jest');

console.log('Hello, welcome to the simple Team Profile Generator!\nStart building your team profile');

const distDir = path.resolve(__dirname, 'dist');
const filename = path.join(distDir, 'index.html');
const render = require('./src/teamprofile.js');

const teamArr = [];
const idArr = [];

function initApp() {

    function addManager() {
        inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's ID.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team manager's office number.";
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
        }); 
    }

    function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What kind of team member would you like to add next?",
            choices: [
                "Engineer",
                "Intern",
                "Finish"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                makeTeamProfile();
        }
    });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the Engineer's name.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's email address.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's GitHub username.";
                }
            },
        ]) .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's name.";
                }  
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's ID.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's email address.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the intern's school name.";
                }
            },
        ]) .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        });
    }

    function makeTeamProfile() {
        console.log("Profile Complete!");
        console.log("file:///C:/Users/ahane/OneDrive/Desktop/Codes/Homework/Team-Profile-Generator/dist/index.html");
        fs.writeFileSync(filename, render(teamArr));
    }
    addManager();
};

initApp();