const inquirer = require('inquirer')
const fs = require('fs');


function addTeamMember() {
    inquirer.prompt(
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'position',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done building my team"]
        }
    )
        .then(answer => {
            if (answer.position === 'Manager') {
                addManager();
            }
            else if (answer.position === 'Engineer') {
                addEngineer();
            }
            else if (answer.position === 'Intern') {
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
            name: 'manager-name'
        },
        {
            type: 'input',
            message: "What is your team manager's ID number?",
            name: 'manager-id'
        },
        {
            type: 'input',
            message: "What is your team manager's email adress?",
            name: 'manager-email'
        },
        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'manager-office'
        },

        // {
        //     type: 'input',
        //     message:
        //     name:
        // }
    ])
    .then(

    )
}



addTeamMember();