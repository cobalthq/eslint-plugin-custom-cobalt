# eslint-plugin-custom-cobalt
```
Archived: 2023-06-21; the rule implemented was to warm on enzyme, based on technical direction to reduce & eliminate enzyme from the codeabse.  We achieved full removal of enzyme, and all engineers are trained not to add it back to the tech stack.  At this time, since we don't have a need for other custom rules, we will archive the repo to forgo maintenance, security updates, quarterly maturity checks etc. Decision was made collectively by 1 Staff Eng + 2 additional engineers.
```
Custom cobalt eslint plugin for issues and preferences specific to our codebase and teams.

Current rules:
- warn on enzyme imports

## Documentation

This project uses [MADR](https://adr.github.io/madr) to record architectural decisions. You can find more information under [docs/decisions](docs/decisions/README.md) folder

## Contribute
Our [CONTRIBUTING.md](CONTRIBUTING.md) is a step-by-step setup and development guide.
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
