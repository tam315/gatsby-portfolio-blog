import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const IconExtLink = ({ color = '#999999' }) => (
  <FontAwesomeIcon
    icon="external-link-alt"
    style={{
      color,
      height: '0.8rem',
      verticalAlign: '0%',
    }}
  />
);

IconExtLink.propTypes = {
  color: PropTypes.string,
};

IconExtLink.defaultProps = {
  color: null,
};

export default IconExtLink;
