const Generator = require('yeoman-generator');
const mkdir = require('mkdirp');
const path = require('path');

module.exports = class extends Generator {
  initializing() {
    mkdir.sync(path.join(this.destinationRoot(), 'src'));
    mkdir.sync(path.join(this.destinationRoot(), 'src', 'tests'));
    this.composeWith(require.resolve('../dotfiles'));
    this.composeWith(require.resolve('../package'));
    this.composeWith(require.resolve('../deps'));
    this.composeWith(require.resolve('../tests'));
  }

  end() {
    this.log('All good! Bye! 👋');
  }
};
