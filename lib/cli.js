const inquirer = require('inquirer');
const { Circle, Square, Triangle, Shape } = require("./shapes");
const fs = require('fs');

class SVGs {
  constructor(){
    this.logoTextEl = ''
    this.shapeEl = ''

  }
  renderShape(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="350">${this.shapeEl}${this.logoTextEl}</svg>`
  }
  textEl(chars, textColor, textX, textY) {
    this.logoTextEl = `<text x="${textX}" y="${textY}" font-size="45" text-anchor="middle" fill="${textColor}">${chars}</text>`;
  }

setShapeElement(shape) { 
  this.shapeEl = shape.renderShape();
}
}

inquirer.prompt([
    {
      type: 'input',
      message: 'Please select up to 3 characters to include in your logo',
      name: 'chars',
      validate: (value) => {
        if (value.length <= 3) {
          return true;
        } else {
          return 'Must be less than 3 chars long';
        }
      },
    },
    {
      type: 'list',
      message: 'What shape would you like your logo to be?',
      choices: ['Square', 'Circle', 'Triangle'],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'What color would your logo be?',
      name: 'color',
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please choose a hex code or color name';
        }
      },
    },
    {
      type: 'input',
      message: 'What would you like the text color to be?',
      name: 'textColor',
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please input a text color';
        }
      },
    },
  ])
  .then((answers) => {
    const { chars, shape, color, textColor } = answers;
    const svg = new SVGs();
    let textX, textY; 

    switch (shape) {
      case 'Circle':
        textX = '50%';
        textY = '50%';
        break;
      case 'Square':
        textX = '130'; 
        textY = '80'; 
        break;
      case 'Triangle':
        textX = '100'; 
        textY = '90';  
        break;
    }

    svg.textEl(chars, textColor, textX, textY);
    let selectedShape;
    switch (shape) {
      case 'Circle':
        selectedShape = new Circle();
        break;
      case 'Square':
        selectedShape = new Square();
        break;
      case 'Triangle':
        selectedShape = new Triangle();
        break;
      default:
        break;
    }

    selectedShape.setColor(color);
    svg.setShapeElement(selectedShape);
    const logoSVG = svg.renderShape();
    console.log(logoSVG);
    fs.writeFileSync(
      'index.html',
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG GENERATOR</title>
</head>
<body>
    <h1>Generated Logo</h1>
    <div id="logo-container">
    ${logoSVG}
    </div>
</body>
</html>`,
      'utf-8'
    );
  })
  .catch((error) => {
    console.error(error);
  });