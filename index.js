// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
const username = require("./utils/api");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "imput",
        name: "username",
        message: "Enter GitHub Username: ",
    },
    {
        type: "input",
        name: "title",
        message: "Enter Project Title: ", 
    },
    {
        type: "input",
        name: "description",
        message: "Enter Brief Project Description: ",
    },
    {
        type: "input",
        name: "installation",
        message: "Explain Install (if necessary) ",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Project Usage: ",
    },
    {
        type: "list",
        name: "license",
        message: "Enter Project License: ",
        choices: ["MIT",
        "GNU GPL",
        "Apache 2.0",
        "Boost Software License 1.0",
        "Mozilla",
        "Open Software License 3.0",
        "None",],
    },
    {
        type: "input",
        name: "contribute",
        message: "Explain Contribute (if necessary) ",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
