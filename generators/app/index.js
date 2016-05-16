const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting() {
    this.log(yosay(
      `Welcome to ${chalk.yellow('Relay Fullstack Generator')}!`
    ));
  },

  wrting() {
    this.fs.copy(`${this.templatePath()}/relay-fullstack/{,.}**`, this.destinationPath());
  },

  install() {
    this.npmInstall();
  }
});
