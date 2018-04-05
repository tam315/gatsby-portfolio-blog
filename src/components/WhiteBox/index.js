import React from 'react'

const WhiteBox = ({ children, height = '100%', maxWidth='initial', padding = 0 }) => {
  let style = {
    background: '#fff',
    boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
    height,
    maxWidth,
    padding,
    width: '100%',
  }

  return (
    <div css={style}>
      { children }
    </div>
  )
}

export default WhiteBox
