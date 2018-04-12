import React from 'react'
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';

import { rhythm } from '../utils/typography';

const BlogPage = ({ data }) => {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      position: 'relative'
    },
    rssLink: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: '-2rem',
      ' img': {
        width: '1.5rem',
      },
    },
    boxInner: {
      display: 'flex',
      padding: rhythm(1),
      '@media (max-width: 450px)': {
        flexDirection: 'column',
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
    },
    title: {
      fontSize: '1.2rem',
      margin: 0,
      marginBottom: rhythm(1/2),
      textAlign: 'left',
    },
    summary: {
      color: '#262626',
      fontSize: '0.9rem',
    },
  };

  const rssPath = '/rss.xml';

  return (
    <SectionContainer colorNumber={1} isTop={true}>
      <SectionHeader colorNumber={1} text={'Yuuniworks Blog'} />
        <div css={styles.container}>
        <a href={rssPath} css={styles.rssLink}><img src="/images/rss.svg" /></a>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Link to={`/blog${node.fields.slug}`} css={styles.link} key={node.frontmatter.title}>
          <WhiteBox hover={true}>

            <article css={styles.boxInner}>

              <div css={{
                // アスペクト比率を維持　かつ　画像で範囲全体をカバー　かつ　最も小さく表示
                background: `url("${node.frontmatter.thumbnail}") no-repeat center center`,
                backgroundSize: 'cover',
                flex: '0 0 100px',
                border: '1px solid rgba(0,0,0,0.2)',
                marginRight: '1rem',
                '@media (max-width: 450px)': {
                  marginRight: 0,
                  marginBottom: '1rem',
                  flex: '0 0 150px',
                }
              }} />

              <div>
              <time css={styles.datetime} dateTime={node.frontmatter.date}>
                {node.frontmatter.date.slice(0,10)}
              </time>
              <h1 css={styles.title}>{node.frontmatter.title}</h1>
              <span css={styles.summary}>{node.frontmatter.summary}</span>
              </div>

            </article>

          </WhiteBox>
          </Link>
        ))}
        </div>

      <Helmet
        link={[
          {
            rel: 'alternate',
            type: 'application/atom+xml',
            href: rssPath,
            title: 'RSS for Yuuniworks Blog'
          },
        ]}
      />
    </SectionContainer>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            summary
            date
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`