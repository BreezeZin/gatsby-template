# Gatsby Template

## Visual Studio Code

### Extensions

-   EditorConfig
-   Prettier
-   Stylelint
-   Tailwind CSS IntelliSense
-   Gitlens

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

## NPM Packages

### package.json

- autoprefixer
- postcss-import
- postcss-nested
- stylelint-config-recommended
- tailwindcss
- gatsby-plugin-postcss

```npm i autoprefixer postcss-import postcss-nested stylelint-config-recommended tailwindcss gatsby-plugin-postcss```

### Tailwind CSS

Create a new config file:

```npx tailwind init```

## Gatsby


### Import CSS

Create CSS file within source:
```/src/css/styles.css```

Import with:

```js
// gatsby-browser.js
import "./src/css/styles.css"
```

### Plugins

```js
// gatsby-config.js
module.exports = {
  plugins: ["gatsby-plugin-postcss"],
}
```

### Root HTML file

Copy to src folder to modify:

```
cp .cache/default-html.js src/html.js
```
