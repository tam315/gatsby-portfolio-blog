import React from 'react'

const WhiteBox = ({ children, height = '100%', maxWidth='initial', padding = 0 }) => {
  let style = {
    background: '#fff',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
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
