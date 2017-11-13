const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installing() {
    this.yarnInstall([
      'babel-cli',
      'babel-core',
      'babel-eslint',
      'babel-plugin-add-module-exports',
      'babel-plugin-transform-runtime',
      'babel-preset-env',
      'babel-preset-stage-2',
      'eslint',
      'eslint-config-airbnb-base',
      'eslint-plugin-babel',
      'eslint-plugin-import',
    ], {
      dev: true,
    });
  }
};
