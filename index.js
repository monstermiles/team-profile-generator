const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = require("./src/generateHTML")

const Employee = require('./lib/employee')
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern")




const teamArray = []




function addTeamMember() {
    inquirer.prompt(
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'position',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done building my team"]
        }
    )
        .then(employeeInfo => {
            if (employeeInfo.position === 'Manager') {
                addManager();
            }
            else if (employeeInfo.position === 'Engineer') {
                addEngineer();
            }
            else if (employeeInfo.position === 'Intern') {
                addIntern();
            }
            else {
                generateHTML();
            }
        }
        )
}



function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team manager's ID number?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the team manager's email adress?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'office'
        },

    ])

        .then(info => {
            const manager = new Manager(info.name, info.id, info.email, info.office)
            // console.log(manager)
            info.position = manager
            teamArray.push(manager)
            addTeamMember();
        }
        )
}



function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the engineer's ID number?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the engineer's email adress?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the engineer's Github username?",
            name: 'github'
        },

    ])

        .then(info => {
            const engineer = new Engineer(info.name, info.id, info.email, info.github)
            // console.log(engineer)
            teamArray.push(engineer)
            addTeamMember();
        }
        )
}


function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the intern's ID number?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the intern's email adress?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'school'
        },

    ])

        .then(info => {
            const intern = new Intern(info.name, info.id, info.email, info.school)
            teamArray.push(intern)
            addTeamMember();
        }
        )
}

//This should be in the generateHTML file/////////////////////////////////////////////



function generateHTML() {
    // console.log(teamArray) 

    const employeeCardsArray = []

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
        
    ${employeeCardsArray}

    </body>
    
    </html>
`

    // console.log(htmlContent)

    teamArray.forEach(teamMember => {
        // console.log("generating HTML");
        // console.log(teamMember.constructor.name)
        if (teamMember.constructor.name === "Manager") {
            generateManagerCard(teamMember);
        }
        else if (teamMember.constructor.name === "Engineer") {
            generateEngineerCard(teamMember);
        }
        else if (teamMember.constructor.name === "Intern")
            generateInternCard(teamMember);
    }
    )

}


function generateManagerCard(teamMember) {
    // console.log("this is a manager card")
    // console.log(teamMember.constructor.name)
    const managerCard = `
    <div style="text-align: center;">
            <h1>Team Profile</h1>
            <div id="cardContainer" class="row align-items-center">
                <div style="border: 3px black solid; border-radius: 20px; margin:30px" class="col-4">
                    <h3>${teamMember.name}</h3>
                    <h4>Manager</h4>
                    <p>ID: ${teamMember.id}</p>
                    <p>${teamMember.email}</p>
                    <p>Office Number ${teamMember.office}</p>
                </div>
            </div>
        </div>
`
    console.log(managerCard)
}

function generateEngineerCard() {
    console.log("engineer card")
}

function generateInternCard() {
    console.log("intern card")
}

////////////////////////////////////////////////////////////////////////////////////

addTeamMember();