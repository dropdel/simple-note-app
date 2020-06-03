const validator = require('validator');
const chalk = require('chalk');

if(validator.isURL('www.google.com')) {
    console.log('Success...');
}
console.log(chalk.yellow.bold('Testing...'))