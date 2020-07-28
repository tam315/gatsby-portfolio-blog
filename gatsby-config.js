const config = require('./data/SiteConfig');

module.exports = {
  siteMetadata: {
    // these metadata only used for gatsby-plugin-feed
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.summary,
                  url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
                  enclosure: {
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.thumbnail,
                  },
                }),
              ),
            query: `
              {
                allMarkdownRemark {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        summary
                        date
                        thumbnail
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PSGDFDD',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://5810361c02584d38b6c795628dae3e1a@sentry.io/1201814',
        // Raven.js version, this is optional.
        version: '3.24.2',
        config: {
          // for Release Tracking
          release: '0e4fdef81448dcfa0e16ecc4433ff3997aa53572',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                  context {
                    modifiedDate # デフォルト設定に追加
                  }
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: 'daily',
            priority: 0.7,
            lastmodISO: edge.node.context.modifiedDate, // デフォルト設定に追加
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/_posts/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // ここの設定がいまいちよくわからない
        // /static/admin/config.ymlに関連設定あり
        path: `${__dirname}/static/blogImages/`,
        name: 'blogImagesFolder',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          // gatsby-remark-imagesは、mdファイル内の画像のリンク先が相対パスの時のみ動作する。
          // Netlify CMSでアップした画像は、config.yamlのpublic_folderで
          // 指定した、'/'から始まる絶対パスに変換される。
          // このままではgatsby-remark-imagesが動作しない。
          // この問題を解消するため、下記のプラグインを使って画像のsrcを相対パスにあらかじめ変換する。
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'blogImagesFolder',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
  ],
};
