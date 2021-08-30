import React from 'react'

interface Props {
  color?: string
  className1?: string
  className2?: string
  className3?: string
  svgClassName?: string
}

function Circles(props: Props) {
  return (
    <svg className={props.svgClassName} width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx="220" cy="220" r="180" className={props.className1}/>
      <circle opacity="0.1" cx="220" cy="220" r="211.646" className={props.className2} stroke-width="16.7089"/>
      <circle opacity="0.1" cx="220" cy="218" r="58.5" className={props.className3} stroke-width="67"/>
    </svg>
  )
}

export default Circles
