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
    }, {type: "input",
        name: "screenshot",
        message: "Insert screenshot image",
    }, {
        type: "checkbox",
        name: "languages",
        message: "What languages were used for this project? \n  (Use the arrows to scroll through possible answers.  Select languages by clicking the space bar.  Press Enter when complete to next question.)",
        choices: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    }, {
        type: "input",
        name: "credits",
        message: "Do you have any citations that need to be credited to this project?",
    }, {
        type: "list",
        name: "license",
        message: "Do you wish to add license to this project?",
        choices: ["Apache 2.0", "MIT license", "ISC License", "None"],
    }, {
        type: "input",
        name: "links",
        message: "Do you have any links you would like to add to this project?",
    },
  ]


// TODO: Create a function to write README file
//   function writeToFile(data) {
//     fs.writeFile("README.md", generateMarkdown(data), function(err) => {
//             err ? console.log(err) : console.log("Success, you have created a memorable README file!"))
//      } .then((answers) => {
//     // Use user feedback for... whatever!!
//     let userFile = `${answers.inputName.toLowerCase().split(" ").join("")}.json`;
//     console.log(userFile);

//     fs.writeFile(userFile, JSON.stringify(answers, null, "\t"), (err) => 
//         err ? console.log(err) : console.log("Success, you have created a memorable README file!")
//         );
//         // fs.appendFile( path.generateMarkdown, data,[ options], callback );
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//     } else {
//       // Something else went wrong
//     }
//   });

// };

  

// TODO: Create a function to write README file
//   function writeToFile(data) {
//     fs.writeFile("README.md", generateMarkdown(data), function(err) =>
//             err ? console.log(err) : console.log("Success, you have created a memorable README file!"));
//             // return fs.writeFileSync(path.join, process.cwd(), fileName, data);
        
//     }



// // TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then ((data) => fs.writeFileSync("README.md", generateMarkdown(data)))
    .then(() => console.log("Success, you have created a memorable README file!"))
    .catch((err) => console.error(err));
}
// Function call to initialize app
init();

// function init() {
//     inquirer.prompt(questions)
//     .then(writeToFile)
// }
        // answers =>
        // {
        //     fs.writeFile("README.md", generateMarkdown(answers));
        // })
        // .catch(error => {
        //     if (error.isTtyError){
        //         console.log(error.isTtyError);
        //     } else {
        //         console.log(error);
        //     }
        


