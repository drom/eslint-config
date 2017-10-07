'use strict';

var rules4 = {
    'linebreak-style': [2, 'unix'],
    strict: [2, 'global'],
    semi: [2, 'always'],
    quotes: [1, 'single'],
    indent: [2, 4],
    'no-console': 1
};

module.exports = {
    env: {
        es6: true,
        commonjs: true
    },
    extends: 'eslint:recommended',
    rules: rules4
};
