const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// to fix gatsby-remark-relative-images error
// see: https://github.com/danielmahon/gatsby-remark-relative-images/issues/6#issuecomment-419667172
require('babel-polyfill');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: '_posts/blog' });

    createNodeField({
      node,
      name: 'slug',
      value: slug.toLowerCase(),
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                dateModified # rss用
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: `/blog${node.fields.slug}`,
            component: path.resolve('./src/templates/blog-post.jsx'),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
              modifiedDate: node.frontmatter.dateModified, // rss用 詳細はgatsby-config.jsを参照
            },
          });
        });

        resolve();
      })
      .catch(() => reject());
  });
};

module.exports = exports;
