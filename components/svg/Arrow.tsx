import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Arrow(props: Props) {
  return (
    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 10L1 19" stroke="#F4AE6D" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

export default Arrow
