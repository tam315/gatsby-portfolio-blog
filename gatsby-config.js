module.exports = {
  plugins: [
    `gatsby-plugin-glamor`,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/_posts/blog/`
      },
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.yuuniworks.com`,
  },
};
