'use strict';

const importsToCheckFor = ['SILENCED_CONSOLE_ERRORS_WARNING'];

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'TODO:',
    },
    fixable: 'code',
    schema: []
  },

  create(context) {
    const checkifConsoleErrorsAreSilenced = (context, node, options) => {
      if (node.type !== 'ImportDeclaration') {
        return false
      }

      const importDeclarationItem = node.source.value

      const isImportPresent = importsToCheckFor.some(
        importItem => importItem === importDeclarationItem
      )

      if (!isImportPresent) {
        return false
      }

      context.report({
        message: 'This test has silenced console errors',
        node,
      })

      return true
    }

    const options = context.options.length ? context.options[0] : {}

    return {
      ImportDeclaration(node) {
        checkifConsoleErrorsAreSilenced(context, node, options)
      },
    }
  },
}
