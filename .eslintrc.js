module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "warn",
    "no-alert": "error",
    "no-await-in-loop": "error",
    "no-return-assign": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        enforceForJSX: true,
      },
    ],
    "no-param-reassign": ["error", { props: true }],
  },
  // Below are rules from Web Bos to check
  // rules: {
  //   'import/prefer-default-export': 0,
  //   import: 0,
  //   'space-before-function-paren': 0,
  //   'comma-dangle': 0,
  //   'max-len': 0,
  //   'import/extensions': 0,
  //   'no-underscore-dangle': 0,
  //   'consistent-return': 0,
  //   'react/display-name': 1,
  //   'react/no-array-index-key': 0,
  //   'react/react-in-jsx-scope': 0,
  //   'react/prefer-stateless-function': 0,
  //   'react/forbid-prop-types': 0,
  //   'react/no-unescaped-entities': 0,
  //   'jsx-a11y/accessible-emoji': 0,
  //   "jsx-a11y/label-has-associated-control": [
  //     "error",
  //     {
  //       "assert": "either"
  //     }
  //   ],
  //   'react/require-default-props': 0,
  //   'react/jsx-filename-extension': [
  //     1,
  //     {
  //       extensions: ['.js', '.jsx'],
  //     },
  //   ],
  //   radix: 0,
  //   'no-shadow': [
  //     2,
  //     {
  //       hoist: 'all',
  //       allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
  //     },
  //   ],
  //   quotes: [
  //     2,
  //     'single',
  //     {
  //       avoidEscape: true,
  //       allowTemplateLiterals: true,
  //     },
  //   ],
  //   'jsx-a11y/href-no-hash': 'off',
  //   'jsx-a11y/anchor-is-valid': [
  //     'warn',
  //     {
  //       aspects: ['invalidHref'],
  //     },
  //   ],
  // },
};
