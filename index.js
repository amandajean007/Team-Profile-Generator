const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

console.log('Hello, welcome to the simple Team Profile Generator!');

const questions = [
// Name
{
    type: 'input',
    name: 'name',
    message: "Employee's name?",
    default: '',
},

// ID
{
  type: 'input',
  name: 'ID',
  message: "Employee's ID?",
  default: '',
}, 

// Email
{
  type: 'input',
  name: 'email',
  message: "Employee's e-mail?",
  default: '',
},

// Role
{
  type: 'list',
  name: 'role',
  message: "What is the employee's position?",
  choices: ['Engineer', 'Intern', 'Manager']
},

// Github Username
{
  type: 'input',
  name: 'githubUsername',
  message: "Engineer's Github username?",
  default: '',
  when: (answers) => answers.role === "Engineer",
},

// School
{
    type: 'input',
    name: 'school',
    message: "Intern's School Name?",
    default: '',
    when: (answers) => answers.role === "Intern",
},

// Office Number
{
    type: 'input',
    name: 'officeNumber',
    message: "Manager's Office number?",
    default: '',
    when: (answers) => answers.role === "Manager",
},

// Add another employee?
// {
//   type: 'confirm',
//   name: 'addEmployee',
//   message: "Would you like to add another employee?",
// }
];

inquirer.prompt(questions)
  .then((answers) => {
  const filename = `./dist/index.html`;
  let addQ = "";
  const guTag = answers.githubUsername;

  if (answers.role === "Manager") {
    addQ =  `Office Number: ` + answers.officeNumber;
  } else if (answers.role === "Intern") {
    addQ = `School: ` + answers.school;
  } else {
    addQ = `Github Username: <a target="_blank" href="https://github.com/` + guTag + `/">` + guTag + `</a>`;
  }

  let badge = "";
  if (answers.role === "Manager") {
    badge = `<img style="width:30px;height:auto;" src="../Assets/managerIcon.png">`;
  } else if (answers.role === "Intern") {
    badge = `<img style="width:30px;height:auto;" src="../Assets/internIcon.png">`;
  } else {
    badge = `<img style="width:30px;height:auto;" src="../Assets/engineerIcon.png">`;
  }

  if (answers.addEmployee === true) {
    inquirer.prompt(questions)
  } else {
    console.log("Complete!");
  }

  const emailTag = answers.email;
  const employeeCard = `
  <div class="card" style="width: 18rem; align-items: center;">
    <div class="card-body">
      <h5 style="align-items:center;" class="card-title">` + answers.name + `</h5>
      <p style="align-items:center;" class="card-text">` + badge + answers.role + `</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ` + answers.ID + `</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:` + emailTag + `">` + emailTag + `</a></li>
      <li class="list-group-item">` + addQ + `</li>
    </ul>
  </div>`;

  const teamProfile = 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Team Profile</title>
  </head>
<header style="font-size: 48px; color: #024a8a; text-align:center; margin: 10px; padding: 10px;">Team Profile</header>
<body>
<div class="container">` + employeeCard + 
`</div>
</body>
</html>`;



  fs.writeFile(filename, teamProfile, (err) => 
    err ? console.log(err) : console.log('link to browser')
);

});
