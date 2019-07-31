const fs = require("fs");

const SlideTemplate = require.resolve(`./src/templates/slide`);

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const contentPath = themeOptions.contentPath || "content";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
    const { createPage } = actions;

    const result = await graphql(`
      query {
        allMdx(sort: { order: ASC, fields: [frontmatter___order] }) {
          nodes {
            frontmatter {
              slug
              order
            }
          }
        }
      }
    `);
    if (result.errors) {
      reporter.panic("Failed to create pages for the posts", result.errors);
    }
    let posts = result.data.allMdx.nodes;

    posts.forEach((post, index) => {
      const { slug, order } = post.frontmatter;
      const next =
        index === posts.length - 1 ? null : `/${posts[index + 1].frontmatter.slug}`;
      const previous = index === 0 ? null : (index === 1 ? '/' : `/${posts[index - 1].frontmatter.slug}`);

      // If it's the first page by order then make it our landing page.
      createPage({
        path: index === 0 ? '/' : slug,
        component: require.resolve(SlideTemplate),
        context: {
          slug,
          order,
          previous,
          next
        }
      });
    });
}
