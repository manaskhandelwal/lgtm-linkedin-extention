module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    quotes: [
      2,
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/no-duplicates": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-useless-path-segments": ["error"],
    "unused-imports/no-unused-imports": "error",
  },
};
