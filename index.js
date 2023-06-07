const inquirer = require('inquirer');
const fs = require('fs');
const generateImage = require('./generateImage');

// Questions array for image creation
const questions = [
 {
    type: 'input',
    name: 'text',
    message: 'Please choose 3 characters for your logo',

 },
 {
    type: 'input',
    name: 'text-color',
    message: 'Please choose a color keyword or hex code for your image text',
 },
 {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your image to be?',
    choices: ['Circle', 'Triangle', 'Square'],
 },
 {
    type: 'input',
    name: 'shape-color',
    message: 'Please choose a color keyword or hex code for your shape color',
 }
]

function init() {
    inquirer
        .createPromptModule(questions)
        
}

init();