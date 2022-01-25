# eslint-plugin-custom-cobalt

Remind devs to remove enzyme when a file is updated.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-custom-cobalt`:

```sh
npm install eslint-plugin-custom-cobalt --save-dev
```

## Usage

Add `custom-cobalt` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "custom-cobalt"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "custom-cobalt/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


