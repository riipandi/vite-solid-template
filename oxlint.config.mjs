import solidV2 from 'eslint-plugin-solid/configs/v2'
import { defineConfig } from 'oxlint'

export default defineConfig({
  jsPlugins: ['eslint-plugin-solid'],
  ignorePatterns: ['**/*.gen.ts', 'dist'],
  settings: solidV2.settings,
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    ...solidV2.rules,
    'no-console': 'off',
    'no-debugger': 'off',
    'typescript/no-explicit-any': 'off',
    'import/default': 'off',
    'import/no-cycle': 'off',
    'no-unused-vars': ['error', { args: 'after-used' }],
    'import/no-unassigned-import': 'off',
    'sort-imports': 'off',
    'typescript/consistent-type-definitions': ['error', 'interface'],
    'typescript/no-unnecessary-type-constraint': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
  },
})
