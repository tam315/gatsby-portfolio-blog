import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  color: PropTypes.string,
};

const defaultProps = {
  color: '#999999',
};

const IconExtLink = ({ color }) => (
  <FontAwesomeIcon
    icon="external-link-alt"
    style={{
      color,
      height: '0.8rem',
      verticalAlign: '0%',
    }}
  />
);

IconExtLink.propTypes = propTypes;
IconExtLink.defaultProps = defaultProps;

export default IconExtLink;
