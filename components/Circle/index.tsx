import styles from './index.module.scss'
import Circles from 'components/svg/Circles'


interface Props {
  children?: any
  rootClassName?: string
  svgClassName?: string
  blue?: boolean
}

export default function Circle(props: Props) {


  return (
    <div className={props.rootClassName}>
      <Circles 
      svgClassName={props.svgClassName} 
      className1={props.blue ? styles.circle1Blue : styles.circle1} 
      className2={props.blue ? styles.circle2Blue : styles.circle2} 
      className3={props.blue ? styles.circle3Blue : styles.circle3}
      />
      {props.children}
    </div>
  )
}
