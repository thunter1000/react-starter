module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/parser': 'babel-eslint',
    // 'import/resolver': 'web',
  },
  plugins: ['react'],
  overrides: [
    {
      files: '*.jsx',
    },
  ],
}
