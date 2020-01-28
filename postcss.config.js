const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.*"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-advanced-variables"),
    require("postcss-nested"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
}
