module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['$root', '.'],
          ['$api', './api'],
          ['$config', './config'],
          ['$prisma', './prisma'],
          ['$errors', './errors'],
          ['$envs', './envs'],
          ['$services', './services'],
          ['$utils', './utils'],
        ],
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
