const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const s = require('underscore.string');

module.exports = yeoman.Base.extend({
  prompting() {
    this.log(yosay(
      `Welcome to ${chalk.yellow('Relay Fullstack Generator')}!`
    ));

    return this.prompt([{
      name: 'moduleName',
      message: 'What would you like to name your app?',
      default: 'relay-fullstack',
      filter: n => s.slugify(n)
    }]).then((answers) => {
      this.answers = {
        moduleName: answers.moduleName,
        appName: s(answers.moduleName).humanize().titleize().value()
      };
    });
  },

  writing() {
    const tplPath = this.templatePath('relay-fullstack');
    const desPath = this.destinationPath();

    const copy = (from, to) => {
      this.fs.copy(`${tplPath}/${from}`, `${desPath}/${to || from}`);
    };

    copy('client/index.html');
    copy('client/assets/**', 'client/assets');
    this.fs.copyTpl([`${tplPath}/{,.}**`, `!${tplPath}/client/index.html`, `!${tplPath}/client/assets/**`], desPath, this.answers);
  },

  install() {
    this.npmInstall();
  }
});

