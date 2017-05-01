var Generator = require('yeoman-generator');
var fs = require('fs');
var path = require('path');

module.exports = class extends Generator {
  _copyRec(src, dest) {
    fs.readdir(src, (err, files) => {
      files.forEach(file => {
        fs.stat(path.join(src, file), (err, stats) => {
          if(stats.isDirectory()) {
            this._copyRec(path.join(src, file), path.join(dest, file));
          } else {
            this.fs.copy(path.join(src, file), path.join(dest, file));
          }
        });
      })
    });
  }
  writing() {
    this._copyRec(path.resolve(__dirname, '../../server'), this.destinationPath('server'))
  }
}
