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
        message: "Please give a short description of the project.",
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
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be used to run tests?",
        name: "tests",
        default: "npm test"
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

// set variable for text to be written in README
let READMEText;
// set variable for placing badge in readme
let licenseBadge;
// ask the user questions for each section
inquirer.prompt(questions)
// put data from answers into variables
    .then(function(answer) {
        const {username, email, title, description, license, install, tests, usage, contribution} = answer
        // select badge to place on README
        if (license === "MIT"){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        else if (license === "APACHE 2.0") {
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        else if (license === "GPL 3.0") {
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        else if (license === "BSD 3") {
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        }
        else if (license === "None") {
            licenseBadge = ""
        }
// created html template with template literals for input answers
        READMEText = `
# ${title}

${licenseBadge}
## Description
${description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

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
If you have any questions, you can email me directly at ${email}. 
Please visit my GitHub page at [${username}](http://github.com/${username}).
        `
 // function to write README file
}).then(function () {fs.writeFile("sampleREADME.md", READMEText, (err) => {
    if (err) throw err;
})
}
)





// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
