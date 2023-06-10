// Requirements to run the function
const inquirer = require('inquirer');
const fs = require('fs');


// Questions array for image creation
const questions = [
 {
    type: 'input',
    name: 'imageText',
    message: 'Please choose 3 characters for your logo',

 },
 {
    type: 'input',
    name: 'textColor',
    message: 'Please choose a color keyword or hex code for your image text',
 },
 {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your image to be?',
    choices: ['circle', 'triangle', 'square'],
 },
 {
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color keyword or hex code for your shape color',
 }
]

// Initializes the app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
         // Variable to hold the prompt answers for template literals
         const { imageText, textColor, shape, shapeColor } = answers;
         // Variable and switch statement to manage the shape and color of the images
         let shapeSVG = '';
     
         switch (shape) {
           case 'circle':
             shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
             break;
           case 'square':
             shapeSVG = `<rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />`;
             break;
           case 'triangle':
             shapeSVG = `<polygon points="150,50 250,150 50,150" fill="${shapeColor}" />`;
             break;
           default:
             console.log('Invalid shape.');
             return;
         }
         // Variable that calls on the w3 svg xml to create the image based off prompt inputs
         const svgContent = `
           <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
             ${shapeSVG}
             <text x="50%" y="50%" fill="${textColor}" font-size="20px" dominant-baseline="middle" text-anchor="middle">${imageText}</text>
           </svg>
         `;
         // Function to create the image
         fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('Logo generated successfully!');
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
       }
   

   // Calls the function
   init()