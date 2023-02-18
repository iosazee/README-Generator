import inquirer from "inquirer";
import fs from 'fs/promises';
import generateMarkDown from "./utils/generateMarkDown.mjs";

// Array of questions for the user
const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'What is your github profile name?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
    },

    {
        type: 'input',
        name: 'description',
        message: "Enter a detailed description for your project:",
    },

    {
        type: 'input',
        name: 'installation',
        message: "Briefly describe how your project can be installed:",
    },

    {
        type: 'input',
        name: 'usage',
        message: "Briefly describe the use cases for your project:",
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['Apache', 'Boost', 'CCO', 'MIT', 'None']
    },

    {
        type: 'input',
        name: 'contributing',
        message: "What guidelines should developers be aware of before contributing to your project?",
        default: "N/A"
    },

    {
        type: 'input',
        name: 'test',
        message: "What command should be used to run tests for your project, if applicable",
        default: 'N/A',
    },

]


// function to write README to file

const writeToFile =  (filename, data) => {

  fs.writeFile(filename, data, (err) =>
  err ? console.error(err) : console.log('Generating README...'))

}

// function to initialize the app
const init = async () => {

    let response = await inquirer
        .prompt(questions)
        console.log(response)
        writeToFile('README.md', generateMarkDown(response))
}

init()







