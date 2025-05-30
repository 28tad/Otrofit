import next from '@next/eslint-plugin-next'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'
import reactHooks from 'eslint-plugin-react-hooks'

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
})

export default [
  js.configs.recommended,
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/stylistic',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  }),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': next,
      'react-hooks': reactHooks,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]
