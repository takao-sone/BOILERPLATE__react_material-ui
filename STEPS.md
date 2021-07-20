# STEPS

Boilerplateを作るにあたり、実行していったコマンド履歴を掲載。  
編集が億劫になり更新されないことや齟齬があることがあるので全信頼しないこと。

commitナンバー 4c98037a534ca57009515f0f7ebb756a1d69b11c 以降で対応したコマンド履歴です。

```shell
# TSの最新化
yarn upgrade-interactive --latest # 何もしない...
yarn upgrade typescript@latest
```

## ESLint

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

`package.json`へ追加

```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
    "preinstall": "typesync || :"
  },
  ...
}
```

## Prettier

```shell
yarn add -D prettier eslint-config-prettier
(typesync)
yarn
```

`.eslintrc.js`へ追加。  
上書きされるので追加順を守ること。

```js
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    // ...
    'prettier',
    // 以下パッケージはprettierにマージされたので指定不必要
    // 'prettier/@typescript-eslint',
    // 'prettier/react',
  ],
  // ...
}
```

`.prettierrc`を作成

```text
singleQuote: true
trailingComma: "all"
```

prettierルールが適切に設定されたかの確認コマンド

```shell
npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'

# 期待値
# => No rules that are unnecessary or conflict with Prettier were found.
```

`package.json`へscript追加

```json
{
  ...
  "scripts": {
    ...
    "fix": "npm run -s format && npm run -s lint:fix",
    "format": "prettier --write --loglevel=warn 'src/**/*.{js,jsx,ts,tsx,gql,graphql,json}'",
    ...
    "lint:conflict": "eslint-config-prettier .eslintrc.js",
    ...
  },
  ...
}
```

## stylelint

```shell
yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
(typesync)
yarn
```

`.stylelintrc.js`を以下の内容で作成

```js
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'string-quotes': 'single',
  },
};
```

`package.json`を以下で編集

```json
{
  ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "fix": "npm run -s format && npm run -s lint:fix",
    "lint": "npm run -s lint:style; npm run -s lint:es",
    "lint:fix": "npm run -s lint:style:fix && npm run -s lint:es:fix",
    "lint:es": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:es:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:style": "stylelint 'src/**/*.{css,less,sass,scss}'",
    "lint:style:fix": "stylelint --fix 'src/**/*.{css,less,sass,scss}'",
    "lint:conflict": "eslint-config-prettier .eslintrc.js",
    "format": "prettier --write --loglevel=warn 'src/**/*.{js,jsx,ts,tsx,gql,graphql,json}'",
    "preinstall": "typesync || :"
  },
  ...
}
```

## Other style, lint settings

```shell
yarn add -D eslint-plugin-prefer-arrow
```

`.eslintrc.js`への追加

```js
module.exports = {
  // ...
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    +'prefer-arrow',
    'react',
    'react-hooks',
  ],
  // ...
  rules: {
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ]
  }
}
```

```shell
# lintの確認
yarn fix
```

Gitとlintの連携  
`git commit`時に構文チェックを走らせ、問題なければcommitされるようにする。

```shell
yarn add -D husky lint-staged
```

`package.json`に以下を追加

```json
{
  "scripts": {
    ...
    "prepare": "husky install"
  },
  ...
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "prettier --write --loglevel=warn",
      "eslint --fix"
    ],
    "src/**/*.css": [
      "stylelint --fix"
    ],
    "src/**/*.{gql,graphql,json}": [
      "prettier --write --loglevel=warn"
    ]
  }
}
```

huskyの設定

```shell
yarn prepare
npx husky add .husky/pre-commit "lint-staged"
git add .
git commit -m 'message'
# これでhuskyの設定が完了。以降のcommit前にlint-stagedが実行される。
```

## React Router

```shell
yarn add history react-router-dom@next
```

```tsx
// ...
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Error Boundary

`AppErrorBoundary.tsx`を作成する。

[Error Boundary](https://ja.reactjs.org/docs/error-boundaries.html)  
[Error Boundaries](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/)  
[【React in TypeScript】ErrorBoundariesの使用方法と注意点](https://marsquai.com/745ca65e-e38b-4a8e-8d59-55421be50f7e/f83dca4c-79db-4adf-b007-697c863b82a5/1df35b56-cba0-472f-8393-813e16a861c7/)

## React Query

```shell
yarn add react-query
```

`index.tsx`を編集
```tsx
//...
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      // If suspense property is true, useErrorBoundary property is implicitly true.
      // If useErrorBoundary is NOT true, the ErrorBoundary can NOT catch errors.
      // useErrorBoundary: true
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Material UI

```shell
yarn add @material-ui/core@next @emotion/react @emotion/styled @material-ui/icons@next
```

公式の例：  
https://next.material-ui.com/guides/interoperability/

`emotion`の`css`を用いてスタイルする場合：  
https://github.com/emotion-js/emotion/discussions/2291  
https://codesandbox.io/s/emotion-material-ui-example-ni92b?file=/src/App.tsx

## 続き