module.exports = {
  env: {
    browser: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  plugins: ["graphql", "prettier"],
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
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": ["warn", "all"],
    "global-require": "off",
  },
}
