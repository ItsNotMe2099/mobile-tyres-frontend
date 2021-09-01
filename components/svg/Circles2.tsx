import React from 'react'

interface Props {
  color?: string
  className1?: string
  className2?: string
  svgClassName?: string
}

function Circles2(props: Props) {
  return (
    <svg className={props.svgClassName} width="412" height="412" viewBox="0 0 412 412" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className={props.className1} opacity="0.1" cx="206" cy="206" r="197.646" stroke-width="16.7089"/>
      <circle className={props.className2} opacity="0.1" cx="206" cy="206" r="97.5" stroke-width="85"/>
    </svg>
  )
}

export default Circles2
