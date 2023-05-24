'use strict';

const node4 = require('../eslint4/node4.js');

const rules = Object.assign(node4.rules, {
    indent: [1, 2],
    'no-console': 'warn'
});

module.exports = {
    env: {node: true, es6: true},
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: rules
};
