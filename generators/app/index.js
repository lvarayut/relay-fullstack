var Generator = require('yeoman-generator');

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
    this.composeWith(require.resolve('../client/index.js'))
    this.composeWith(require.resolve('../server/index.js'))
    this.composeWith(require.resolve('../config/index.js'))
  }
}
