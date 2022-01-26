# eslint-plugin-custom-cobalt

Custom cobalt plugin for issues specific to our codebase.


# Directions for using as a local repo rule // current as of January 2022

// tba

# Directions for using as a formal npm module // future
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
        "custom-cobalt/warn-on-enzyme": "warn",
    }
}
```



