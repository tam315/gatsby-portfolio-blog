import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';

import { rhythm } from '../utils/typography';

// for gatsby-remark-prismjs plugin
import 'prismjs/themes/prism-tomorrow.css';

export default ({data}) => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
    },
    boxInner: {
      padding: rhythm(1),
      lineHeight: '2rem',
      ' h2': {
        borderLeft: '10px solid #5883D9',
        paddingLeft: '10px',
      },
      ' h3': {
        borderBottom: '1px dotted rgba(0,0,0,0.5)',
        fontSize: '1.2rem',
        paddingBottom: '5px',
      },
      ' h2, h3': {
        textAlign: 'left',
        margin: '2rem auto 1rem',
      },
      ' ul, li': {
        listStyleType: 'initial',
      },
      ' ul':{
        paddingLeft: '25px',
      },
      ' table': {
        width: 'auto',
      },
      ' img': {
        width: '100%',
        maxWidth: '500px',
        padding: '1rem',
      },
      ' a': {
        color: '#262626',
      },
    },
    backButton: {
      background: '#fff',
      border: '2px solid #6292F1',
      borderRadius: '7px',
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      color: '#6292F1',
      display: 'inline-block',
      padding: '5px 1rem',
      textDecoration: 'none',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
      ':first-child': {
        marginBottom: '2rem',
      },
      ':last-child': {
        marginTop: '2rem',
      }
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      marginBottom: '2rem',
    },
    datetime: {
      color: '#999',
      display: 'block',
      marginBottom: '1rem',
    },
    title: {
      borderBottom: '1px dotted rgba(0,0,0,0.5)',
      marginBottom: '2rem',
      textAlign: 'left',
    },
    comments: {
      ' hr': {
        marginTop: '3rem',
      }
    },
    footer: {
      display: 'flex',
      marginTop: '2rem',
      padding: '2rem',
      ' a': {
        color: '#262626'
      },
      '@media (max-width: 499px)': {
        flexDirection: 'column',
        ' img': {
          width: '100px',
          margin: '0 auto 2rem',
        },
        ' div p:first-child': {
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        },
      },
      '@media (min-width: 500px)': {
        display: 'flex',
        ' img': {
          height: '100px',
          marginRight: '2rem',
        },
        ' div p:first-child': {
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        }
      }
    }
  };

  const post = data.markdownRemark
  return (
    <SectionContainer colorNumber={1} isTop={true}>
      <SectionHeader colorNumber={1} text={'Yuuniworks Blog'} link="/blog/" />

      <div css={styles.container}>

      <Link to="/blog/" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>

      <WhiteBox>
        <article css={styles.boxInner}>
          <time css={styles.datetime} dateTime={post.frontmatter.date}>
            {post.frontmatter.date.slice(0,10)}
          </time>
          <h1 css={styles.title}>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside css={styles.comments}>
          <hr />
          <div className="fb-comments" data-href="https://www.yuuniworks.com/" data-numposts="10"></div>
          </aside>

        </article>

      </WhiteBox>

      <WhiteBox>
        <footer css={styles.footer}>
          <img src="/images/profile.png" />
          <div>
            <p>田村 翔太</p>
            <p><Link to="/">Yuuniworks</Link> 代表。島根県浜田市を拠点に主にフロントエンド開発のお手伝いをしているフリーランスエンジニアです。React/Reduxを用いたSingle Page Applicationや、NodeJSを使ったAPI開発を得意としています。</p>
          </div>
        </footer>
      </WhiteBox>


      <Link to="/blog/" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>

      </div>

    <Helmet
      title={`${post.frontmatter.title} / Yuuniworks Blog`}
      script={[
        {
          innerHTML:(`
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.12&appId=1597425033686344&autoLogAppEvents=1';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `),
        },
        {
          type: 'application/ld+json',
          innerHTML:(JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `http://www.yuuniworks.com/blog${post.fields.slug}`
            },
            "headline": post.frontmatter.title,
            "image": [
              `https://www.yuuniworks.com${post.frontmatter.thumbnail}`,
              ],
            "datePublished": post.frontmatter.date,
            "dateModified": post.frontmatter.dateModified,
              "author": {
              "@type": "Person",
              "name": "Shota Tamura"
            },
              "publisher": {
              "@type": "Organization",
              "name": "Yuuniworks",
              "logo": {
                "@type": "ImageObject",
                "url": 'https://www.yuuniworks.com/images/logo_for_schema.png',
              }
            },
            "description": post.frontmatter.summary,
          })),
        },
      ]}
    />
    </SectionContainer>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      fields { slug }
      frontmatter {
        title
        summary
        date
        dateModified
        thumbnail
      }
    }
  }
`