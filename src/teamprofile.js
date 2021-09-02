module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <header style="background-color: #d9362d; font-size: 48px; color: black; text-align:center; margin: 10px; padding: 10px;">Team Profile</header>
    <body>
        <div class="container" style="display: flex;">
            ` + createTeam(team) + `
        </div>
    </body>
    </html>`;
    };

const createTeam = team => {
    const createManager = manager => {
        return `
        <div class="card" style="width: 18rem; align-items: center;">
            <div class="card-body bg-secondary text-white">
                <h5 style="align-items:center;" class="card-title">` + manager.getName() + `</h5>
                <p style="align-items:center;" class="card-text">
                    <img style="width:30px;height:auto;" src="../Assets/managerIcon.png"> ` + manager.getRole() + `
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ` + manager.getId() + `</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:` + manager.getEmail() + `">` + manager.getEmail() + `</a></li>
                <li class="list-group-item">Office Number: ` + manager.getOfficenumber() + `</li>
            </ul>
        </div>
        `;
    };
    const createEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem; align-items: center;">
            <div class="card-body bg-secondary text-white">
                <h5 style="align-items:center;" class="card-title">` + engineer.getName() + `</h5>
                <p style="align-items:center;" class="card-text">
                    <img style="width:30px;height:auto;" src="../Assets/engineerIcon.png"> ` + engineer.getRole() + `
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ` + engineer.getId() + `</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:` + engineer.getEmail() + `">` + engineer.getEmail() + `</a></li>
                <li class="list-group-item">Github: <a target="_blank" href="https://github.com/` + engineer.getGithub() + `">` + engineer.getGithub() + `</a></li>
            </ul>
        </div>
        `;
    };
    const createIntern = intern => {
        return `
        <div class="card" style="width: 18rem; align-items: center;">
            <div class="card-body bg-secondary text-white">
                <h5 style="align-items:center;" class="card-title">` + intern.getName() + `</h5>
                <p style="align-items:center;" class="card-text">
                    <img style="width:30px;height:auto;" src="../Assets/internIcon.png"> ` + intern.getRole() + `
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ` + intern.getId() + `</li>
                <li class="list-group-item">Email: <a target="_blank" href="mailto:` + intern.getEmail() + `">` + intern.getEmail() + `</a></li>
                <li class="list-group-item">School: ` + intern.getSchool() + `</li>
            </ul>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

};