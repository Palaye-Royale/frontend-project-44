import stylisticJs from '@stylistic/eslint-plugin-js'
import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',

      // Стилистические правила (ВСЕ которые видишь в ошибках)
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/semi': ['error', 'never'], // ← никогда не ставить ; в конце строк!
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/space-before-function-paren': ['error', 'always'],
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/js/keyword-spacing': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/array-bracket-spacing': ['error', 'never'],
      '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/js/eol-last': ['error', 'always'], // ← пустая строка в конце файла
      '@stylistic/js/no-trailing-spaces': 'error', // ← убрать пробелы в конце строк
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/js/padded-blocks': ['error', 'never'],
    },
  },
  {
    ignores: ['node_modules/'],
  },
]
