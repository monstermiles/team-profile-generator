const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = require("./src/generateHTML")

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
            // console.log(intern)
            teamArray.push(intern)
            addTeamMember();
        }
    )
}


function generateHTML() {
    // console.log(teamArray) 
    teamArray.forEach(teamMember => console.log("generating HTML")) 
}






addTeamMember();


