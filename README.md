# Gatsby Template

## Visual Studio Code

### Extensions

- EditorConfig
- Prettier
- Stylelint
- Tailwind CSS IntelliSense
- Gitlens
- HTML CSS Support

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

(1) gatsby new \<project-name>

(2) Copy all templates files into new project folder

(3) Copy and paste into Git BASH

```bash
(
#!/bin/sh
# Additional NPM packages
npm i autoprefixer postcss-import postcss-nested stylelint-config-recommended tailwindcss gatsby-plugin-postcss
# Create Tailwind CSS config file
npx tailwind init
# Copy root HTML file to modify
cp .cache/default-html.js src/html.js
)
```

To test generated CSS file add the following NPM script:

```
"css-test": "postcss src/css/styles.css -o test.css",
```
