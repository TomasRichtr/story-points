/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    complexity: ["error", 10],
    "max-params": ["error", 3],
    "max-lines": ["warn", { max: 250, skipBlankLines: true, skipComments: true }],
    "max-len": ["warn", { code: 120 }],
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "off",
    semi: ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/require-default-prop": "error",
    "vue/no-v-html": "off",
    "vue/html-closing-bracket-newline": [
      "warn",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "shorthand",
        default: "shorthand",
        named: "shorthand",
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ["self"], // Allow `const self = this`; `[]` by default
      },
    ],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    "vue/attributes-order": "error",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
