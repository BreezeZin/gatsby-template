module.exports = {
  siteMetadata: {},
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/images/"
      }
    },
    "gatsby-plugin-sitemap"
  ]
};
