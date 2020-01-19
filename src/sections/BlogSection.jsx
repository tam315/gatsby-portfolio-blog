import Link from 'gatsby-link';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';

const BlogSection = () => {
  const styles = {
    link: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: 'auto',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      textAlign: 'center',
      textDecoration: 'none',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="blog">
      <SectionHeader text="Blog" colorNumber="1" />
      <Link to="/blog/" css={styles.link}>
        My awesome blog
      </Link>
    </SectionContainer>
  );
};

export default BlogSection;
