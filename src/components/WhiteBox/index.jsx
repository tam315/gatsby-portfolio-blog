import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  css: PropTypes.object, // eslint-disable-line
  hover: PropTypes.bool,
};

const defaultProps = {
  css: {},
  hover: false,
};

const WhiteBox = ({ children, css, hover, ...rest }) => {
  const combinedCss = {
    background: '#fff',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    transition: 'box-shadow 0.05s ease-out',
    ':hover': {
      boxShadow:
        hover &&
        '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    },
    ...css,
  };

  return (
    <div css={combinedCss} {...rest}>
      {children}
    </div>
  );
};

WhiteBox.propTypes = propTypes;
WhiteBox.defaultProps = defaultProps;

export default WhiteBox;
