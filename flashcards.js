var BasicCard = require('./BasicCard.js');
var ClozeCard = require('ClozeCard.js');
var inquirer = require('inquirer');

inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }
      ]).then(function(answers) {
      });