module.exports = {
  siteMetadata: {
    // 下記データはRSS用にのみ使用する。
    // Webページ用のメタデータは'layouts'フォルダ内のファイルにハードコーディングする。
    // 理由は、GraphQLをネストして使用することができないという制限事項を回避するため。
    title: 'YUUNIWORKS / 島根のフリーランスエンジニア',
    description: '島根県浜田市を拠点に、主にフロントエンド開発のお手伝いをしているフリーランスエンジニアです。',
    siteUrl: `https://www.yuuniworks.com`,
  },
  plugins: [
    `gatsby-plugin-feed`,
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
};
