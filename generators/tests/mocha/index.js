const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installing() {
    this.yarnInstall([
      'chai',
      'chai-enzyme',
      'chai-http',
      'dirty-chai',
      'mocha',
      'sinon',
      'sinon-chai',
    ], {
      dev: true,
    });
  }
};
