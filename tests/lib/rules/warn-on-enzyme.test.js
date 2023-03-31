/* eslint-disable */

/**
 * @fileoverview Remind developers to remove enzyme when a file is updated.
 * @author Jess Lark
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const lib = require("../../../lib/")

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
})

const ruleTester = new RuleTester()

const enzymeRule = lib.rules["warn-on-enzyme"]

ruleTester.run("warn-on-enzyme", enzymeRule, {
  // any non-enzyme import should pass, whether options are included or not
  // import mount from something other than enzyme should pass
  valid: [
    {
      code: "import { foo } from 'bar'",
      options: [],
    },
    {
      code: "import { mount } from 'notEnzyme'",
      options: [{ importsToCheckFor: ["enzyme", "otherThing", "yetAnother"] }],
    },
  ],

  invalid: [
    // importing anything from enzyme should fail if there are no options
    // importing anything from enzyme should fail if there are multiple options
    // importing anything from a given option should fail
    {
      code: "import { mount } from 'enzyme'",
      options: [],
      errors: [
        {
          message: "Refactor tests to no longer use enzyme",
          type: "ImportDeclaration",
        },
      ],
    },
    {
      code: "import { something } from 'enzyme'",
      options: [
        { importsToCheckFor: ["enzyme", "otherThing", "enzymeRelatedThing"] },
      ],
      errors: [
        {
          message: "Refactor tests to no longer use enzyme",
          type: "ImportDeclaration",
        },
      ],
    },
    {
      code: "import { something } from 'enzymeRelatedThing'",
      options: [
        { importsToCheckFor: ["enzyme", "otherThing", "enzymeRelatedThing"] },
      ],
      errors: [
        {
          message: "Refactor tests to no longer use enzyme",
          type: "ImportDeclaration",
        },
      ],
    },
  ],
})
