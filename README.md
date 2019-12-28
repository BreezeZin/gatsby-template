# Gatsby Template

## Visual Studio Code

### Extensions

- EditorConfig
- Prettier
- Stylelint
- Tailwind CSS IntelliSense
- Gitlens
- HTML CSS Support
- ESLint

### User Settings

```js
{
  "editor.formatOnPaste": true,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "explorer.confirmDelete": false,
  "explorer.openEditors.visible": 0,
  "gitlens.currentLine.enabled": false,
  "gitlens.hovers.currentLine.over": "line",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.autoSave": "off",
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "gitlens.blame.avatars": false,
  "gitlens.blame.highlight.enabled": false,
  "gitlens.codeLens.enabled": false,
  "workbench.startupEditor": "newUntitledFile",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.snippetSuggestions": "top",
  "prettier.endOfLine": "lf",
  "editor.formatOnSave": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
  },
  "css.validate": false,
  "terminal.integrated.fontSize": 11,
}
```

## Project Setup

Copy and paste into Git BASH

```bash
(
#!/bin/sh
# Setup git
git init
# Create Tailwind CSS config file
npm install
)
```

Commit setup files and push to github
