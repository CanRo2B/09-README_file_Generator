// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs= require("fs");

// TODO: Create an array of questions for user input
const questions = [];
var inquirer = require("inquirer");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "inputName",
        message: "What is your Github User Name?",
    }, {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    }, {
        type: "input",
        name: "description",
        message: "What is the Project description?",
    }, {
        type: "input",
        name: "runProject",
        message: "How to run or use the Project?",
    }, {
        type: "checkbox",
        name: "languages",
        message: "What languages were used for this project?",
        choices: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    }, {
        type: "input",
        name: "credits",
        message: "Do you have any citations that need to be credited to this project?",
    }, {
        type: "confirm",
        name: "license",
        message: "Do you wish to add license to this project?",
        choices: ["Apache 2.0", "MIT license", "ISC License"],
    }, {
        type: "confirm",
        name: "links",
        message: "Do you have any links you would like to add to this project?",
        choices: ["Email", "Github", "linkedIN"]
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
