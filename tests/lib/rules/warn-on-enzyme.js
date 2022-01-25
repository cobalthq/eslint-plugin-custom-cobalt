/**
 * @fileoverview Remind developers to remove enzyme when a file is updated.
 * @author Jess Lark
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/warn-on-enzyme"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("warn-on-enzyme", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import { mount } from 'enzyme'",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
