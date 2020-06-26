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
        message: "Please giver a short description of the project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license would you like to use for your project?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should the user use to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        mesaage: "What command should run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
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
* [Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributiong](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation
Use the command "${install}" to install dependencies.

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contribution}

## Tests
Use the command "${tests}" to run tests.

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
