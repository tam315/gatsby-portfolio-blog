import React from 'react'

const Flex = ({
  children,
  flexDirection = 'row',
  justifyContent = 'center',
}) => (
  <div css={{
    display: 'flex',
    flexDirection,
    justifyContent,
  }}>
    { children }
  </div>
)

export default Flex
