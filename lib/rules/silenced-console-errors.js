'use strict';

const importsToCheckFor = ['tests/silencedConsoleErrorsWarning'];

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
    schema: [{ importsToCheckFor}],
  },

  create(context) {
    const checkIfConsoleErrorsAreSilenced = (context, node, options) => {
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
        message: 'This file has silenced console errors',
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
