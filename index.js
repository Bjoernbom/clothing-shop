module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
  },
}
