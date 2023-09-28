const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./shapes");


class SVGs {
  constructor(){
    this.logoTextEl = ''
    this.shapeEl = ''

  }
  renderShape(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="176">${this.shapeEl}${this.logoTextEl}</svg>`
  }
  setTextElement(text,color){
    this.logoTextEl = `<text x="100" y="90" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
}
setShapeElement(shape){
  this.shapeEl = shape.render()
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
]);