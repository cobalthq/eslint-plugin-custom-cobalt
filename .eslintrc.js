"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  "parserOptions": {
    "sourceType": "module",
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
