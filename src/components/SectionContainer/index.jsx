import React from 'react';

const SectionContainer = ({
  children,
  colorNumber,
  id,
  isTop,
}) => {
  const colors = {
    1: '#F5F7FA',
    2: '#6292f1',
  };

  const bgColor = colors[colorNumber] || 'initial';

  const styles = {
    container: {
      background: bgColor,
      minHeight: isTop ? '100vh' : 'initial',
      padding: '80px 15px 60px',
      paddingTop: isTop ? '130px' : '80px',
      '@media (min-width: 500px)': {
        paddingRight: '30px',
        paddingLeft: '30px',
      },
    },
  };

  return (
    <section id={id} css={styles.container}>
      {children}
    </section>
  );
};

export default SectionContainer;
