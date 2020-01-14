module.exports = {
  env: {
    browser: true,
  },
  extends: ["airbnb", "airbnb/hooks"],
  plugins: ["graphql"],
  rules: {
    // Used to validate GraphQL queries
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        schemaJsonFilepath: "./schema.json",
        tagName: "graphql",
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "arrow-parens": ["error", "as-needed"],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: false,
      },
    ],
    "react/jsx-closing-tag-location": "off",
    "operator-linebreak": "off",
    "no-unused-vars": ["warn", "all"],
    "react/jsx-props-no-spreading": "off",
    "object-curly-newline": "off",
  },
}
