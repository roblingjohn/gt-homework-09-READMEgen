const inquirer = require("inquirer");
const fs = require("fs");

// ask questions to get information from the user
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe the project.",
        name: "description"
    },
    {
        type: "input",
        message: "I need to figure out how to do the choosy thing.",
        name: "license"
    },
    {
        type: "input",
        message: "Please explain any installation instructions.",
        name: "install"
    },
    {
        type: "input",
        mesaage: "Testing parameters?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please give info on the usage.",
        name: "usage"
    },
    {
        type: "input",
        message: "Any contribution guidelines?",
        name: "contribution"
    }
];


let READMEText;
inquirer.prompt(questions)
// put data from answers into variables
    .then(function(answer) {
        const {username, email, title, description, license, install, tests, usage, contribution} = answer
// created html template with template literals for input answers
        READMEText = `
# ${title}

## Description
${description}

## Table of Contents
I'll make this later.

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributions
${contribution}

## Tests
${tests}

## Questions
For any questions, please contact me at http://github.com/${username} or at ${email}.
        `
}).then(function () {fs.writeFile("sampleREADME.md", READMEText, (err) => {
    if (err) throw err;
})
}
)

// function to write README file



// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
