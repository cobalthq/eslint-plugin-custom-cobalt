'use strict';


/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'fails if `silencedConsoleErrorsWarning` is imported somewhere',
    },
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const checkIfConsoleErrorsAreSilenced = (context, node, options) => {
      if (node.type !== 'ImportDeclaration') {
        return false
      }

      const isImportPresent = node.source.value.includes('silencedConsoleErrorsWarning')

      if (!isImportPresent) {
        return false
      }

      context.report({
        message: 'This file has silenced console errors. Remove the silencedConsoleErrorsWarning import to see the errors that have been silenced.',
        node,
      })

      return true
    }

    const options = context.options.length ? context.options[0] : {}

    return {
      ImportDeclaration(node) {
        checkIfConsoleErrorsAreSilenced(context, node, options)
      },
    }
  },
}
