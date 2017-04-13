var Generator = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var s = require('underscore.string');

module.exports = class extends Generator {
  prompting() {
    if(this.option('headless')) {
      this.answers = {moduleName: 'relay-fullstack', appName: 'Relay Fullstack'};
      return [];
    }
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
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('./**/!(*.html|*.png)'),
      this.destinationPath('.'),
      this.answers
    );
    this.fs.copy(
      this.templatePath('./**/*.@(html|png)'),
      this.destinationPath('.')
    );
  }
}
