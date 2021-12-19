const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js")


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
        
    .then(managerInfo => {
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office)
            console.log(manager)
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
            name: 'office'
        },

    ])
        
    .then(engineerInfo => {
            const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
            console.log(engineer)
            addTeamMember();
        }
    )
}








addTeamMember();