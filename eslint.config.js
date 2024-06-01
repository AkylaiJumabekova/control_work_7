import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import airbnb from 'eslint-config-airbnb-typescript';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ...react.configs.recommended,
    files: ['*.tsx', '*.ts'],
  },
  {
    ...reactHooks.configs.recommended,
    files: ['*.tsx', '*.ts'],
  },
  {
    ...typescript.configs.recommended,
    files: ['*.tsx', '*.ts'],
  },
  {
    ...airbnb,
    files: ['*.tsx', '*.ts'],
  },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      globals: {
        ...globals.browser,
        React: 'readonly'
      },
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off',
    },
  },
];
