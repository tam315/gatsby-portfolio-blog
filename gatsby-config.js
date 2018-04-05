module.exports = {
  siteMetadata: {
    title: 'YUUNIWORKS / 島根のフリーランスエンジニア',
    description: 'Yuuniworksは島根県浜田市で、主にSPAやFaaS開発のお手伝いをしている個人事業主です。',
    keywords: 'SPA, Faas, Serverless, React, Angular, フリーランス',
  },
  plugins: [
    `gatsby-plugin-glamor`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
