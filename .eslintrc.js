module.exports = {
  extends: 'plugin:prettier/recommended',
  env: {
    browser: true,
    es6: true,
    node: false,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
    'consistent-return': 0,
    'func-names': 0,
    'id-blacklist': [2, 'K'],
    'max-len': [
      2,
      110,
      2,
      {
        ignoreUrls: true,
      },
    ],
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['A', 'UnsafeString'],
      },
    ],
    'newline-per-chained-call': 0,
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      2,
      {
        varsIgnorePattern: '^_$',
      },
    ],
    'prefer-arrow-callback': 0,
    'prefer-const': 2,
    'prefer-rest-params': 0,
    'prefer-template': 1,
    'no-restricted-syntax': [2, 'WithStatement'],
    curly: 2,
    'no-implicit-coercion': [
      2,
      {
        boolean: false,
        number: true,
        string: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
};
