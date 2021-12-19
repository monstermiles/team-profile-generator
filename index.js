const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager.js");



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
            message: "What is your team manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your team manager's ID number?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your team manager's email adress?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'office'
        },

        // {
        //     type: 'input',
        //     message:
        //     name:
        // }
    ])
        
    .then(managerInfo => {
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office)
            console.log(manager)
        }
    )
}



addTeamMember();