/**
 * @fileoverview Remind developers to remove enzyme when a file is updated.
 * @author Jess Lark
 */
'use strict';

//-------------------------------------------
// Rule Definition
//-------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Remind developers to remove enzyme when a file is updated.',
      category: 'Fill me in',
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [{ importsToCheckFor: ['enzyme', 'otherThing', 'yetAnother'] }], // optional, defaults to ['enzyme']
  },

  create(context) {
    const checkIfEnzymeIsUsed = (context, node, options) => {
      if (node.type !== 'ImportDeclaration') {
        return false
      }

      const importDeclarationItem = node.source.value

      const { importsToCheckFor = ['enzyme'] } = options

      const enzymeRelatedImportPresent = importsToCheckFor.some(
        importItem => importItem === importDeclarationItem
      )

      if (!enzymeRelatedImportPresent) {
        return false
      }

      context.report({
        message: 'Refactor tests to no longer use enzyme',
        node,
      })

      return true
    }

    const options = context.options.length ? context.options[0] : {}

    return {
      ImportDeclaration(node) {
        checkIfEnzymeIsUsed(context, node, options)
      },
    }
  },
}
