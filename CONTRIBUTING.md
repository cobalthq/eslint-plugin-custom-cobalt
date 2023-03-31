# Contributing

## Requirements

This repositiory requires signed commits. Make sure to sign every commit, follow this guide for more info on [signing commits](https://zombie.atlassian.net/wiki/spaces/ENG/pages/2387312988/Signing+Git+commits+with+GPG+keys) and [how to setup GPG](https://zombie.atlassian.net/wiki/spaces/ENG/pages/2387312988/Signing+Git+commits+with+GPG+keys#Setup-on-User%E2%80%99s-machine%3A).

## Getting started

### Prerequisities

- [Create a GitHub token](https://github.com/settings/tokens) (scoped to `write:packages`)
- Set the credentials (e.g. using a shell startup script):

  ```shell
  echo "export GITHUB_USERNAME="<your_username>"" >> ~/.profile
  echo "export GITHUB_TOKEN="<your_token>"" >> ~/.profile
  ```

hint: for the vanilla mac shell it will be ~/.zshrc file (instead of ~/.profile)

- [Generate SSH Key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Get your SSH Key on GitHub](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
- Clone the repo:
  ```shell
  git clone git@github.com:cobalthq/eslint-plugin-custom-cobalt.git
  ```
- Install a Node Version Manager of your choice (for example, [nvm](https://github.com/nvm-sh/nvm)).
  - Check `.nvmrc` file for correct node version to install. Note that different applications might be using different versions of Node; it's recommended to setup the automatic switching between versions (for example, for nvm: [https://github.com/nvm-sh/nvm#automatically-call-nvm-use](https://github.com/nvm-sh/nvm#automatically-call-nvm-use))

> **Warning**
> Wrong version of `node` might cause issues.

#### Recommended setup (optional)

If you are using vs-code, we recommend the following extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Recommended Visual Studio Code workspace settings:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.suggestSelection": "first",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.tabSize": 2,
  "window.zoomLevel": 1,
  "diffEditor.ignoreTrimWhitespace": false
}
```

### Run Tests

```shell
npm test
```

### Branch Convention

The branches in this repo must match the following pattern to properly fill the PRs with labels and the associated Jira prefix:

`<feature|chore|fix>/<XXX-000|no-ticket>/<branch-description>`

Examples: `feature/PX-344/fancy-button` or `chore/no-ticket/nice-thing` or `fix/EX-211/broken-page`

### See README for instructions on consuming a this plugin after it is updated.