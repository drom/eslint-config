'use strict';

// https://gjs.guide/guides/gjs/intro.html
// https://gjs.guide/guides/gjs/features-across-versions.html

const rules = {
    camelcase: 1,
    'func-call-spacing': [1, 'never'],
    indent: [1, 4],
    'no-console': 'error', // https://gjs.guide/guides/gjs/intro.html#logging
    'no-tabs': 1,
    'no-trailing-spaces': 'warn',
    'prefer-template': 'warn',
    'object-curly-spacing': [1, 'always'], // https://gjs.guide/guides/gjs/style-guide.html#use-spaces-inside-curly-braces
    'key-spacing': [1, {beforeColon: false, afterColon: true}], // https://gjs.guide/guides/gjs/style-guide.html#enforce-spacing-between-keys-and-values-in-object-literal-properties
    quotes: [1, 'single'],
    semi: [2, 'always']
};

const globals = {
    exports: 'writable',
    imports: 'readonly',  // https://gjs.guide/guides/gjs/intro.html#imports-and-modules
    log: 'readonly'       // https://gjs.guide/guides/gjs/intro.html#logging
};

module.exports = {
    parserOptions: {
        ecmaVersion: 2015
    },
    globals: globals,
    rules: rules
};
