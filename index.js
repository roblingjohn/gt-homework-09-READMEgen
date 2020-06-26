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

inquirer.prompt(questions)
    .then(function(answer) {
        fs.writeFile("answers.json", JSON.stringify(answer), "utf8", function(err){
        if(err){
            return console.log("error")
        }
}) 

});

// put data from questions into variables
// created html template with template literals for input answers



// function to write README file


// function to initialize program
function init() {

}

// function call to initialize program
init();
