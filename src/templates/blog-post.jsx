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
        maxWidth: '500px',
        padding: '1rem',
      },
      ' code': {
        background: 'black',
        borderRadius: '5px',
        color: 'white',
        display: 'inline-block',
        padding: '1px 5px',
      },
      ' pre code': {
        display: 'block',
        overflow: 'scroll',
        padding: '20px',
      }
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
    }
  };

  const post = data.markdownRemark
  return (

    <SectionContainer colorNumber={1} isTop={true}>
      <SectionHeader colorNumber={1} text={'YUUNIWORKS ブログ'} />

      <article css={styles.container}>
      
      <Link to="/blog" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>

      <WhiteBox>
        <div css={styles.boxInner}>
          <time css={styles.datetime} dateTime={post.frontmatter.date}>
            {post.frontmatter.date.slice(0,10)}
          </time>
          <h1 css={styles.title}>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </WhiteBox>
      
      <Link to="/blog" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>
      
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