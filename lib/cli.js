const inquirer = require('inquirer');
const { Circle, Square, Triangle, Shape } = require("./shapes");
const fs = require('fs');

class SVGs {
  constructor(){
    this.logoTextEl = ''
    this.shapeEl = ''

  }
  renderShape(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="176">${this.shapeEl}${this.logoTextEl}</svg>`
  }
  textEl(chars,color){
    this.logoTextEl = `<text x="100" y="90" font-size="45" text-anchor="middle" fill="${color}">${chars}</text>`
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
      }else {
        return 'Must be less than 3 chars long';
      }
    }
  },

  {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    choices: ['Square', 'Circle', 'Triangle'],
    name: 'shape',

  },
  {
    type: 'input',
    message: "What color would your logo to be?",
    name: 'color',
    validate: (value) => {
      if (value) {
        return true;
      }else {
        return 'please choose a hex code or color name';
      }
    }
  }
]).then((answers) => {
  const { chars, shape, color } = answers;
  const svg = new SVGs();

  svg.textEl(chars, color);

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
}).catch((error) => {
  console.error(error);
  });