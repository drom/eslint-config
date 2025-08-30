'use strict';

const node4 = require('../eslint4/node4.js');
// const js = require('@eslint/js');
const globals = require('globals');

const rules = {...node4.rules, ...{
  indent: [1, 2],
  'no-console': 'warn',
}};

const commonPart = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'commonjs'
  },
  rules
};

const nodeOrBrowser = {...commonPart};
nodeOrBrowser.languageOptions.globals = {...globals.node, ...globals.browser};

// const nodeOnly = {...commonPart};
// nodeOnly.languageOptions.globals = {...globals.node};

// const browserOnly = {...commonPart};
// browserOnly.languageOptions.globals = {...globals.browser};

// const workerOnly = {...commonPart};
// workerOnly.languageOptions.globals = {...globals.worker};

module.exports = nodeOrBrowser;
