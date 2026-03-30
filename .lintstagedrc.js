import path from 'path';

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

export default {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '**/*.{json,html,css,md}': [buildPrettierCommand],
};
