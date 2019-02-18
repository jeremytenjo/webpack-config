module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'babel', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps'],
  },
  rules: {
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'no-console': 'off',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'react/display-name': 'off',
    'react/jsx-uses-react': 1,
    'react/prop-types': 'off',
    'react/jsx-fragments': ['off', 'syntax'],
    'react-hooks/rules-of-hooks': 'error',
  },
}
