import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      },
      react: { version: "18.3" }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: import("eslint-plugin-import")
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": "off",
      "react-hooks/rules-of-hooks": "off",
      "react/display-name": "off",
      "comma-dangle": ["error", "never"],
      "arrow-body-style": ["error", "as-needed"],
      "no-console": "warn",
      // "import/no-unresolved": [2, { caseSensitive: true }],
      // "import/order": [
      //   2,
      //   {
      //     groups: [
      //       "external",
      //       "builtin",
      //       "index",
      //       "sibling",
      //       "parent",
      //       "internal",
      //       "type",
      //     ],
      //     alphabetize: {
      //       order: "asc",
      //       caseInsensitive: true,
      //     },
      //     "newlines-between": "always-and-inside-groups",
      //   },
      // ],
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/self-closing-comp": 0,
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "react/require-default-props": 0,
      "react/jsx-props-no-spreading": 0,
      "no-multi-assign": "off",
      "react/forbid-prop-types": "off",
      "object-curly-newline": "off",
      "no-unused-vars": "warn",
      "no-confusing-arrow": "off",
      "implicit-arrow-linebreak": "off",
      "react/jsx-curly-newline": "off",
      "newline-per-chained-call": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "react/no-unstable-nested-components": "off",
      "react/destructuring-assignment": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-nested-ternary": "off",
      "react/jsx-closing-tag-location": "off",
      "no-param-reassign": "off",
      "consistent-return": "off",
      camelcase: "off",
      "operator-linebreak": "off",
      "array-callback-return": "off",
      "no-shadow": "off",
      "react/jsx-no-bind": "off",
      "function-paren-newline": "off",
      "react/jsx-wrap-multilines": "off",
      "react/function-component-definition": "off",
      "dot-notation": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    }
  }
];
