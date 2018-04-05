import React from 'react'

import { rhythm } from '../../utils/typography';

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
        marginLeft: '0.5rem'
      }
    },
    withoutInnerText: {
      background: color,
      marginBottom: '20px',
    }
  }

  if (text) {
    return (
      <div css={styles.withInnerText}>
        {text}
      </div>
    )
  } else {
    return <hr css={styles.withoutInnerText} />
  }
}

export default Hr
