# eslint-plugin-custom-cobalt

Custom cobalt eslint plugin for issues and preferences specific to our codebase and teams.

Current rules:
- warn on enzyme imports

# Consuming the plugin in any given repo

## Installation

Ensure that eslint is installed: [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

## Usage

Add `custom-cobalt` to the plugins section of your `.eslintrc` configuration file. Omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        // other plugins in use
        "custom-cobalt",
    ]
}
```

Configure the rules you want to use under the rules section:

```json
{
    "rules": {
        // other rules in use
        "custom-cobalt/warn-on-enzyme": "warn",
    }
}
```

Add to the package.json as a dev dependency:

```json
{
    "devDependencies": {
        // other dev dependencies
        "eslint-plugin-custom-cobalt": "git+https://github.com/cobalthq/eslint-plugin-custom-cobalt.git#(current tag number)",
    }
}
