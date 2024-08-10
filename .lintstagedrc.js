const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = (filenames) => {
  console.log('filenames', filenames);
  return `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;
};
module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.{js,ts,jsx,tsx,json,html,less,css,md}': [buildPrettierCommand],
};
