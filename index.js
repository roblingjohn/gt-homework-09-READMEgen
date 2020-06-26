const inquirer = require("inquirer");

// array of questions for user
const questions = [
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
        message: "Please explain any installation instructions.",
        name: "install"
    },
    {
        type: "input",
        message: "Please give info on the usage.",
        name: "usage"
    },
    {
        type: "input",
        message: "I need to figure out how to do the choosy thing.",
        name: "license"
    },
    {
        type: "input",
        message: "Any contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        mesaage: "Testing parameters?",
        name: "testing"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }

];

inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
