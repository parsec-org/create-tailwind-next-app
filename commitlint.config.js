module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 120],
    'type-enum': [2, 'always', ['feat', 'fix', 'enhance', 'chore', 'test', 'doc', 'refactor', 'style', 'revert']],
  },
};
