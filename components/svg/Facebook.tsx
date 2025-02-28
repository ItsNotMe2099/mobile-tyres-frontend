import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Facebook(props: Props) {
  return (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37 18.5C37 8.28164 28.7184 0 18.5 0C8.28164 0 0 8.28164 0 18.5C0 28.7184 8.28164 37 18.5 37C18.6084 37 18.7168 37 18.8252 36.9928V22.5975H14.8506V17.9652H18.8252V14.5543C18.8252 10.6014 21.2389 8.44785 24.7654 8.44785C26.4564 8.44785 27.909 8.5707 28.3281 8.62852V12.7621H25.9C23.985 12.7621 23.6092 13.6727 23.6092 15.0096V17.958H28.198L27.5982 22.5902H23.6092V36.2846C31.3416 34.066 37 26.9479 37 18.5Z"/>
    </svg>
  )
}

export default Facebook
