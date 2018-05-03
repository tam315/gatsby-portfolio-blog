import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  colorNumber: PropTypes.string,
  id: PropTypes.string,
  isTop: PropTypes.bool,
  skew: PropTypes.bool,
  skewFillBottom: PropTypes.bool,
  skewReverse: PropTypes.bool,
};

const defaultProps = {
  colorNumber: null,
  id: null,
  isTop: false,
  skew: false,
  skewFillBottom: false,
  skewReverse: false,
};

const SectionContainer = ({
  children,
  colorNumber,
  id,
  isTop,
  skew,
  skewFillBottom,
  skewReverse,
}) => {
  const colors = {
    1: '#F5F7FA',
    2: '#6292f1',
  };

  const bgColor = colors[colorNumber];

  const styles = {
    container: {
      minHeight: isTop ? '100vh' : 'initial',
      padding: '0 15px 110px',
      paddingTop: isTop ? '130px' : '120px',
      position: 'relative',
      zIndex: 100,
      '@media (min-width: 500px)': {
        paddingRight: '30px',
        paddingLeft: '30px',
      },
    },
    bgLayer: {
      background: bgColor,
      position: 'absolute',
      transform: skewReverse ? 'skewY(5deg)' : 'skewY(-5deg)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -100,
    },
    fillBottom: {
      background: bgColor,
      position: 'absolute',
      top: '100px',
      left: 0,
      right: 0,
      bottom: '-100px',
      zIndex: -100,
    },
  };

  return (
    <section id={id} css={styles.container}>
      {children}

      {skew ? <div css={styles.bgLayer} /> : null}

      {skewFillBottom ? <div css={styles.fillBottom} /> : null}
    </section>
  );
};

SectionContainer.propTypes = propTypes;
SectionContainer.defaultProps = defaultProps;

export default SectionContainer;
