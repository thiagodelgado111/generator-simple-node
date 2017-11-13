const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'Your module name',
    }, {
      type: 'input',
      name: 'githubUsername',
      message: 'Github username',
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'Author email',
    }])
    .then(answers => {
      this.props = answers;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json.template'),
      this.destinationPath('package.json'),
      {
        moduleName: this.props.moduleName,
        authorEmail: this.props.authorEmail,
        githubUsername: this.props.githubUsername,
      },
    );
  }
};
