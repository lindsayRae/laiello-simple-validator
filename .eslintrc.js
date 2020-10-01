module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-useless-escape': 'off',
    'import/named': 'off',
  },
};
