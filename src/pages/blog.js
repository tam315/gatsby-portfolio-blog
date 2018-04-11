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
      maxWidth: '400px',
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
      padding: rhythm(1),
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      marginBottom: '2rem',
    },
    datetime: {
      color: '#999',
      display: 'block',
      marginBottom: rhythm(1/2),
    },
    title: {
      fontSize: '1rem',
      margin: 0,
      textAlign: 'left',
    }
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
              <time css={styles.datetime} dateTime={node.frontmatter.date}>
                {node.frontmatter.date.slice(0,10)}
              </time>
              <h1 css={styles.title}>{node.frontmatter.title}</h1>
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
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`