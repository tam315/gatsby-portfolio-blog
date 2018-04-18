import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import React from 'react'

import { rhythm } from '../../utils/typography';

const IconExtLink = ({ color = '#999999' }) => (
  <FontAwesomeIcon
    icon="external-link-alt"
    style={{
      color,
      height: '0.8rem',
      verticalAlign: '0%',
    }}
  />
)

export default IconExtLink
