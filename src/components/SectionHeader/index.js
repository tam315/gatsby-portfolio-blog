import Link from 'gatsby-link';
import React from 'react'

const SectionHeader = ({ colorNumber, text, link }) => {
  const colors = {
    1: '#262626',
    2: '#ffffff',
  }
  const charColor = colors[colorNumber] || 'initial';

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    h2: {
      color: charColor,
    },
    hr: {
      backgroundColor: charColor,
      height: '3px',
      marginBottom: '50px',
      width: '54px',
    },
    link: {
      color: charColor,
      textDecoration: 'none',
    }
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.h2}>
        { link ? <Link to={link} css={styles.link}>{text}</Link> : text}
      </h2>
      <hr css={styles.hr} />
    </div>
  )
}

export default SectionHeader
