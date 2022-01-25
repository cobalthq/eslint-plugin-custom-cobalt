/**
 * @fileoverview Remind developers to remove enzyme when a file is updated.
 * @author Jess Lark
 */
 "use strict";

const RuleTester = require("eslint").RuleTester
const lib = require("../../../lib/rules/warn-on-enzyme")

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})

const ruleTester = new RuleTester()

ruleTester.run('removeEnzyme', lib.rules.removeEnzyme, {
  // any non-enzyme import should pass, whether options are included or not
  // import mount from something other than enzyme should pass
  valid: [
    {
      code: "import { foo } from 'bar'",
      options: [],
    },
    {
      code: "import { mount } from 'notEnzyme'",
      options: [{ importsToCheckFor: ['enzyme', 'otherThing', 'yetAnother'] }],
    },
  ],

  invalid: [
    // importing anything from enzyme should fail if there are no options
    // importing anything from enzyme should fail if there are multiple options
    // importing anything from a given option should fail
    // importing items from a multiple given options should fail

    // importing items from enzyme when options that don't include 'emzyme' are given SHOULD fail but probably doesn't

    {
      code: "import { mount } from 'enzyme'",
      options: [],
      errors: [
        {
          message: 'Refactor tests to no longer use enzyme',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { something } from 'enzyme'",
      options: [
        { importsToCheckFor: ['enzyme', 'otherThing', 'enzymeRelatedThing'] },
      ],
      errors: [
        {
          message: 'Refactor tests to no longer use enzyme',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { something } from 'enzymeRelatedThing'",
      options: [
        { importsToCheckFor: ['enzyme', 'otherThing', 'enzymeRelatedThing'] },
      ],
      errors: [
        {
          message: 'Refactor tests to no longer use enzyme',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code:
        "import { something } from 'enzymeRelatedThing' import { something } from 'enzyme'",
      options: [{ importsToCheckFor: ['enzyme', 'enzymeRelatedThing'] }],
      errors: [
        {
          message: 'Refactor tests to no longer use enzyme',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { something } from 'enzyme'",
      options: [{ importsToCheckFor: ['otherThing', 'enzymeRelatedThing'] }],
      errors: [
        {
          message: 'Refactor tests to no longer use enzyme',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
})
