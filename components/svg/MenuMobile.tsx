import React from 'react'

interface Props {
  color?: string
  className?: string
}

function MenuMobile(props: Props) {
  return (
    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="2" rx="1" fill="#4E4E4E"/>
      <rect y="6" width="21" height="2" rx="1" fill="#4E4E4E"/>
      <rect y="12" width="21" height="2" rx="1" fill="#4E4E4E"/>
    </svg>
  )
}

export default MenuMobile
