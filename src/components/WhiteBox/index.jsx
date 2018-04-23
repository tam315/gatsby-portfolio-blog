import React from 'react'

const WhiteBox = ({ children, height = '100%', maxWidth='initial', padding = 0, hover = false }) => {
  let style = {
    background: '#fff',
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    height,
    margin: 'auto',
    maxWidth,
    padding,
    width: '100%',
    transition: 'box-shadow 0.05s ease-out',
    ':hover': {
      boxShadow: hover ? '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)' : null
    },
  }

  return (
    <div css={style}>
      { children }
    </div>
  )
}

export default WhiteBox
