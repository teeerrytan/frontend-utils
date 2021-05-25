/* IBM CONFIDENTIAL OCO SOURCE MATERIALS COPYRIGHT: 5737-M08 (C) COPYRIGHT IBM CORP. 2019,2020.The source code for this program is not published or otherwise divested of its trade secrets, irrespective of what has been deposited with the U.S. Copyright Office. */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:uc/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  plugins: [
    'flowtype',
    'css-modules',
    'prettier',
    'jest',
    'react-hooks',
    'react',
    'uc',
  ],

  globals: {
    __DEV__: true,
    __BUILD_CONFIG__: true,
    __ENTRY_PATH__: true,
    AW4: true,
    orion: true,
  },

  env: {
    browser: true,
    'jest/globals': true,
    jquery: true,
  },

  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: false,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    'jsx-a11y/label-has-for': [
      'error',
      {
        components: ['Label'],
        required: { every: ['id'] },
        allowChildren: true,
      },
    ],

    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'no-unused-vars': ['error', { caughtErrors: 'none', args: 'none' }],
    'prefer-const': 'off',
    'global-require': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'no-underscore-dangle': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-useless-constructor': 'error',
    'no-alert': 'error',
    'func-names': 'error',
    'react/forbid-prop-types': 'error',
    'one-var': 'off',
    'react/require-default-props': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-danger': 'error',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/sort-comp': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'off',
    'jest/valid-expect': 'error',
    'class-methods-use-this': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'lines-between-class-members': 'off',
    'no-else-return': 'off',
    'react/display-name': 'off',
    camelcase: 'off',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },

  overrides: [
    {
      files: [
        '**/__mock__/*.js',
        'tools/*.js',
        'webpack/*.js',
        '**/__test__/*.js',
      ],
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
