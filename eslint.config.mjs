import importPlugin from "eslint-plugin-import";
import { fixupPluginRules } from '@eslint/compat';

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
    },
    rules: importPlugin.configs['recommended'].rules,
  },
]
