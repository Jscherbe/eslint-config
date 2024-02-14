/* eslint-env node */
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "indent": ["warn", 2],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-unused-vars": "off",
  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    },
    // Allow index.vue in pages (SSG)
    {
      files: ["src/pages/**/index.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ]
};

