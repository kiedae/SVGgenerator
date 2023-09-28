const inquirer = require('inquirer');

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