"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
      extends: "plugin:node/recommended-module"
    },
  ],
};
