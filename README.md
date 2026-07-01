# @drom/eslint-config

Shareable [ESLint](https://eslint.org/) configuration.

A single package bundling one config per **(ESLint major version × runtime target)**. Pick the file that matches the ESLint version you run and the JavaScript environment you target. Both the modern [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) (ESLint 9) and the legacy [`.eslintrc`](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) format (ESLint 2–8) are provided.

## Install

```sh
npm install --save-dev @drom/eslint-config eslint
```

## Usage

### ESLint 9 — flat config

`package.json` `main` points at [`eslint9/node22.js`](eslint9/node22.js), so the bare package name resolves to it. In `eslint.config.js`:

```js
'use strict';

module.exports = [
  require('@drom/eslint-config')
];
```

This config targets Node 22 / ES2022, `commonjs` source type, with both Node and browser globals enabled.

### ESLint 2–8 — legacy config

Reference the specific file for your ESLint version and runtime in `.eslintrc.js`:

```js
'use strict';

module.exports = {
  extends: '@drom/eslint-config/eslint8/node22'
};
```

## Available configs

| Config | ESLint | Format | Target | Notes |
| --- | --- | --- | --- | --- |
| [`eslint2/node0.js`](eslint2/node0.js) | ≥ 2 | legacy | ES5 / Node | No `ecmaVersion`; `no-mixed-requires` |
| [`eslint2/node1.js`](eslint2/node1.js) | ≥ 2 | legacy | ES6 subset | `ecmaVersion: 6`; arrow functions off; `func-style: declaration` |
| [`eslint4/node4.js`](eslint4/node4.js) | 4 | legacy | Node 4 / ES6 | Base config the newer legacy configs extend |
| [`eslint4/node8.js`](eslint4/node8.js) | 4 | legacy | Node 8 / ES2017 | Extends `node4`; indent 2; `no-console: warn` |
| [`eslint7/gjs4.js`](eslint7/gjs4.js) | 7 | legacy | [GNOME GJS](https://gjs.guide/) | GJS globals (`imports`, `log`); curly spacing |
| [`eslint8/node12.js`](eslint8/node12.js) | 8 | legacy | Node 12 / ES2020 | Extends `node4`; indent 2; `no-console: warn` |
| [`eslint8/node22.js`](eslint8/node22.js) | 8 | legacy | Node 22 / ES2022 | Extends `node4`; indent 2; `no-console: warn` |
| [`eslint9/node22.js`](eslint9/node22.js) | 9 | flat | Node 22 / ES2022 | `main`; Node + browser globals |

## Style summary

- **Indentation** — 4 spaces (legacy base); 2 spaces on newer runtimes (Node 8+).
- **Quotes** — single (`quotes: single`, warn).
- **Semicolons** — required (`semi: always`, error).
- **Strict mode** — global (`strict: global`, error).
- **Naming** — `camelCase` (warn).
- **`no-console`** — error on the base config, relaxed to warn on newer runtimes.
- **Complexity** — capped at 20.

Most correctness rules (`no-undef`, `no-unreachable`, `no-dupe-keys`, `no-unsafe-*`, …) are errors; stylistic rules are warnings.

## Compatibility

Tested on Node 12, 14, 16, 18, and 20 across Linux, Windows, and macOS. The `peerDependencies` accept `eslint >= 2`.

## License

[MIT](LICENSE)
