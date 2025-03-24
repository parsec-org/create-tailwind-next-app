import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    extends: [
      "next",
      "prettier",
      "eslint:recommended",
      "next/core-web-vitals",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    root: true
  }),
]

export default eslintConfig