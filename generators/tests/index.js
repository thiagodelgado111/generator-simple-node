const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('ava');
    this.option('mocha');
    this.option('tape');
  }

  initializing() {
    if (this.options.ava) {
      return this.composeWith(require.resolve('./ava'));
    }

    if (this.options.mocha) {
      return this.composeWith(require.resolve('./mocha'));
    }

    if (this.options.tape) {
      return this.composeWith(require.resolve('./tape'));
    }

    return null;
  }
};
