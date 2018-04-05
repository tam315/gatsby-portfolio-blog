import React from 'react'

const SectionContainer = ({ children, id, colorNumber } ) => {
  const colors = {
    1: '#F5F7FA',
    2: '#6292f1',
  }

  const bgColor = colors[colorNumber] || 'initial';

  const styles = {
    container: {
      background: bgColor,
      padding: '80px 30px 60px',
    }
  }

  return (
    <section id={id} css={styles.container}>
      {children}
    </section>
  )
}

export default SectionContainer
