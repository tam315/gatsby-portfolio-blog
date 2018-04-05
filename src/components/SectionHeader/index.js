import React from 'react'

const SectionHeader = ({ colorNumber, text }) => {
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
    }
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.h2}>
        {text}
      </h2>
      <hr css={styles.hr} />
    </div>
  )
}

export default SectionHeader
