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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
