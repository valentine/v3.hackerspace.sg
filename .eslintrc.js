const OFF = 0;
// eslint-disable-next-line no-unused-vars
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/prettier',
      ],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  plugins: ['react-hooks'],
  rules: {
    // Keeping function-component-definition off for now:
    // https://github.com/airbnb/javascript/issues/2505
    'react/function-component-definition': OFF,
    'react/jsx-filename-extension': OFF,
    'react-hooks/rules-of-hooks': ERROR,
  },
};
