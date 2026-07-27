import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const filePatterns = ['**/*.{ts,tsx,js,jsx,mjs,cjs}'];

export default defineConfig([
  // Base recommended rules with browser + node globals
  // no-undef is turned off because TypeScript handles undefined variable checking
  {
    files: filePatterns,
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-undef': 'off',
    },
  },
  // Next.js core-web-vitals
  {
    name: 'next/core-web-vitals',
    files: filePatterns,
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // TypeScript ESLint
  {
    name: 'typescript-eslint',
    files: filePatterns,
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  // Prettier
  {
    name: 'prettier',
    files: filePatterns,
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // React Hooks
  {
    name: 'react-hooks',
    files: filePatterns,
    plugins: {
      'react-hooks': fixupPluginRules(reactHooksPlugin),
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  // Override default ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
