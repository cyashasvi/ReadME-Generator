// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const {stringGenerator} = markdown;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project',
        message: "What is the name of your project/application?"
    },
    {
        type: 'input',
        name: 'Description',
        message: "Describe your project/application. What does it do?"
    },
    {
        type: 'input',
        name: 'Usage',
        message: "How can we use this application?"
    },
    {
        type: 'input',
        name: 'Contribution',
        message: "How can someone contribute to this application?"
    },
    {
        type: 'input',
        name: 'Testing',
        message: "Are there any testing requirements?"
    },

    {
        type: 'input',
        name: 'Username',
        message: "What is your GitHub username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((answers) => { const {Project, Description, Usage, Contribution, Testing, Username} = answers;
    fs.writeFile("README.md", stringGenerator(Project, Description, Usage, Contribution, Testing, Username), (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    })
})
}
// Function call to initialize app
init();
