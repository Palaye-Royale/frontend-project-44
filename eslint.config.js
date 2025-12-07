import stylisticJs from '@stylistic/eslint-plugin-js';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // <-- Это добавит console, process и другие глобальные объекты Node.js
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'no-console': 'off', // Разрешаем использовать console.log
      'no-unused-vars': 'warn',
      
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/space-before-function-paren': ['error', 'always'],
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/js/keyword-spacing': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/array-bracket-spacing': ['error', 'never'],
      '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '*.min.js',
    ],
  },
];
