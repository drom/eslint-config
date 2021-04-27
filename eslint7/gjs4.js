'use strict';

// https://gjs.guide/guides/gjs/intro.html

const rules = {
    indent: [1, 2],
    quotes: [1, 'single'],
    semi: [2, 'always']
};

const globals = {
    imports: 'readonly',
    exports: 'writable'
};

module.exports = {
    parserOptions: {
        ecmaVersion: 2015
    },
    globals: globals,
    rules: rules
};
