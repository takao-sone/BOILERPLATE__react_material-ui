# React Boilerplate

## How to Set Up

### Dev

```shell
git clone {this-repository}
yarn
yarn start
```

### Production

```shell
yarn build

# serve built codes
serve -s build
```

### About samples

If you don't need any samples, please delete them.

```shell
rm -rf src/components/samples/*
rm src/styles/sample-styles.ts
```

## Trouble Shooting

### husky

If husky hook doesn't work, below might be helpful.

```shell
yarn prepare
npx husky add .husky/pre-commit "yarn lint-staged"
```

[husky - Github](https://github.com/typicode/husky)

## Libraries

### Main

- Node.js v16.13.1 (Active LTS as of 2021-12-19)
- TypeScript v4.4
- React v17
- React Router v6
- Material-UI v5
- React Query v3.34

### Dev Dependencies

- ESLint
- Prettier
- Stylelint
- husky
- lint-staged
