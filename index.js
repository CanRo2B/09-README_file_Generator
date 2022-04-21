// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs= require("fs");

// TODO: Create an array of questions for user input
const questions = [
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
        type: "input",
        name: "screenshot",
        message: "Insert screenshot image relative path.",
    }, {
        type: "input",
        name: "videolink",
        message: "Insert relative path for your video link in the Assets folder.",
    },  {
        type: "checkbox",
        name: "languages",
        message: "What languages were used for this project? \n  (Use the arrows to scroll through possible answers.  Select languages by clicking the space bar.  Press Enter when complete to next question.)",
        choices: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    }, {
        type: "input",
        name: "credits",
        message: "Insert citations that was used to create this project.",
    }, {
        type: "list",
        name: "license",
        message: "Do you wish to add license to this project?",
        choices: ["Apache 2.0", "MIT license", "ISC License", "None"],
    }, {
        type: "input",
        name: "portfolio",
        message: "Input Portfolio link",
    }, {
        type: "input",
        name: "github",
        message: "Input Github link",
    }, {
        type: "email",
        name: "email",
        message: "Input Email Address",
    }
  ]

// // TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then ((data) => fs.writeFileSync("README.md", generateMarkdown(data)))
    .then(() => console.log("Success, you have created a memorable README file!"))
    .catch((err) => console.error(err));
}
// Function call to initialize app
init();

