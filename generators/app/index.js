'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ${chalk.green('generator-cypress-scaffolding')}!`
      )
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'api',
        message: 'Would you like to create the ApiRest request functions?',
        default: true
      },
      {
        type: 'confirm',
        name: 'web',
        message: 'Would you like to create the Web elements and objects examples?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;

      this.props = props;
    });
  }

  writing() {
    //Writting E2E Tests folder

    //Writing commands.js
    this.fs.copy(
      this.templatePath('cypress/support/commands.js'),
      this.destinationPath('cypress/support/commands.js')
    );

    //Writing config.js
    this.fs.copy(
      this.templatePath('./cypress.config.js'),
      this.destinationPath('./cypress.config.js')
    )
    //Writing fixtures
    this.fs.copy(
      this.templatePath('cypress/fixtures'),
      this.destinationPath('cypress/fixtures')
    );

    //Write api requests depending on the user answer 
    if (this.props.api !== false) {
      this.fs.copy(
        this.templatePath('cypress/e2e/api'),
        this.destinationPath('cypress/e2e/api')
      );
      this.fs.copy(
        this.templatePath('cypress/support/api/requests'),
        this.destinationPath('cypress/support/api/requests')
      )
    }

    //Write web elements and objects depending on the user answer 
    if (this.props.web !== false) {
      this.fs.copy(
        this.templatePath('cypress/e2e/web'),
        this.destinationPath('cypress/e2e/web')
      );
      this.fs.copy(
        this.templatePath('cypress/support/web/elements'),
        this.destinationPath('cypress/support/web/elements')
      );
      this.fs.copy(
        this.templatePath('cypress/support/web/objects'),
        this.destinationPath('cypress/support/web/objects')
      );
    }
  }

  installingCypress() {
    this.spawnCommand('npm install',
      ['cypress'])
  }
};
