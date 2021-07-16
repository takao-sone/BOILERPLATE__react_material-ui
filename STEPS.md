# STEPS

Boilerplateを作るにあたり、実行していったコマンド履歴を掲載。  
編集が億劫になり更新されないことや齟齬があることがあるので全信頼しないこと。

commitナンバー 4c98037a534ca57009515f0f7ebb756a1d69b11c 以降で対応したコマンド履歴です。

```shell
# TSの最新化
yarn upgrade-interactive --latest # 何もしない...
yarn upgrade typescript@latest
```

```shell
# eslint設定
yarn eslint --init
# ? How would you like to use ESLint?
# 》To check syntax, find problems, and enforce code style
#
# ? What type of modules does your project use? JavaScript modules (import/export)
# 》JavaScript modules (import/export)
#
# ? Which framework does your project use?
# 》React
#
# ? Does your project use TypeScript?
# 》Yes
#
# ? Where does your code run?
# 》Browser
#
# ? How would you like to define a style for your project?
# 》Use a popular style guide
#
# ? Which style guide do you want to follow?
# 》Airbnb: https://github.com/airbnb/javascript
#
# ? What format do you want your config file to be in?
# 》JavaScript
#
# The config that you've selected requires the following dependencies:
#
# eslint-plugin-react@^VERSION @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^VERSION eslint-plugin-import@^VERSION eslint-plugin-jsx-a11y@^VERSION eslint-plugin-react-hooks@^VERSION @typescript-eslint/parser@latest
# ? Would you like to install them now with npm?
# 》No
#
# 上記の実行はエラーになるでOK

yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin \
 eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y \
 eslint-plugin-react-hooks @typescript-eslint/parser

yarn add -D typesync

typesync

yarn
```

```js
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    // ...
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    // ...
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    // ...
  },
  plugins: [
    // ...
    'import',
    'jsx-a11y',
    'react-hooks',
  ],
  root: true,
  // ...
  rules: {
    // occur error in `import React from 'react'` with react-scripts 4.0.1
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
```

`tsconfig.eslint.json` を以下の内容で作成
```json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

`.eslintignore` を以下の内容で作成
```ignorelang
build/
public/
**/coverage/
**/node_modules/
**/*.min.js
*.config.js
.*lintrc.js
```
