# Gatsby Slideshow Theme

This is an extremely simple, extensible theme for making slideshows with Gatsby.

See the [live demo](https://gatsby-theme-slideshow.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-slideshow
    ```

2.  Add the theme to your `gatsby-config.js` with a path to your mdx slide files:
    ```js
    module.exports = {
      plugins: [
        {
          resolve: "gatsby-theme-slideshow",
          options: {
            contentPath: "slides"
          }
        },
      ]
    }
    ```

3.  Add some slides to the directory path you defined in the previous step. Make
sure you add the `slug` and `order` properties to your frontmatter.

4.  Start your site
    ```sh
    gatsby develop
    ```
