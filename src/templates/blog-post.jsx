import React from 'react';
import Link from 'gatsby-link';

import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';

import { rhythm } from '../utils/typography';

export default ({data}) => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
    },
    boxInner: {
      padding: rhythm(1),
    },
    backButton: {
      color: '#262626',
      textDecoration: 'none',
      padding: '0 1rem',
      lineHeight: '2.5rem',
      marginBottom: '1rem',
      display: 'inline-block',
      background: '#fff',
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
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
      marginBottom: '1rem',
      textAlign: 'left',
    }
  };

  const post = data.markdownRemark
  return (

    <SectionContainer colorNumber={1} isTop={true}>
      <SectionHeader colorNumber={1} text={'YUUNIWORKS ブログ'} />

      <article css={styles.container}>
      <Link to="/blog" css={styles.backButton}>←記事一覧に戻る</Link>

      <WhiteBox>
        <div css={styles.boxInner}>
          <time css={styles.datetime} dateTime={post.frontmatter.date}>
            {post.frontmatter.date.slice(0,10)}
          </time>
          <h1 css={styles.title}>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </WhiteBox>
      </article>

    </SectionContainer>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`