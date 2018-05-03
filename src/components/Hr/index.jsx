import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: null,
};

const Hr = ({ text }) => {
  const color = '#999999';

  const styles = {
    withInnerText: {
      color,
      alignItems: 'center',
      display: 'flex',
      fontSize: '0.8rem',
      marginBottom: '10px',
      ':before,:after': {
        borderTop: '1px solid',
        content: ' ',
        flexGrow: 1,
      },
      ':before': {
        marginRight: '0.5rem',
      },
      ':after': {
        marginLeft: '0.5rem',
      },
    },
    withoutInnerText: {
      background: color,
      marginBottom: '20px',
    },
  };

  if (text) {
    return <div css={styles.withInnerText}>{text}</div>;
  }

  return <hr css={styles.withoutInnerText} />;
};

Hr.propTypes = propTypes;
Hr.defaultProps = defaultProps;

export default Hr;
