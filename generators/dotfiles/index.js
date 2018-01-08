const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    [
      'babelrc',
      'editorconfig',
      'eslintignore',
      'eslintrc',
      'gitattributes',
      'gitignore',
      'nvmrc',
    ].map(file => this.fs.copy(
      this.templatePath(file),
      this.destinationPath(`.${file}`),
    ));
  }
};
