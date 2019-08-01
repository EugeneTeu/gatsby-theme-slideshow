const path = require("path");
module.exports = ({ contentPath = "content" }) => {
  return {
    siteMetadata: {
      title: "Gatsby Slideshow Theme",
    },
    plugins: [
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-transition-link",
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      "gatsby-plugin-sass",
      {
        resolve: "gatsby-mdx",
        options: {
          extensions: [".md", ".mdx"],
          defaultLayouts: {
            default: require.resolve("./src/components/layout.js")
          },
          gatsbyRemarkPlugins: [
            { resolve: "gatsby-remark-images" },
            {
              resolve: "gatsby-remark-prismjs"
            }
          ]
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "",
          path: path.resolve(contentPath)
        }
      },
    ],
  }
}
