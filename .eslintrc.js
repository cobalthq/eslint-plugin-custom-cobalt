"use strict"

module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
      extends: "plugin:node/recommended-module",
    },
  ],
}
