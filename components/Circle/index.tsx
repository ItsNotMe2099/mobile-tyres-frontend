import styles from './index.module.scss'
import Circles from 'components/svg/Circles'
import Circles2 from 'components/svg/Circles2'


interface Props {
  children?: any
  rootClassName?: string
  svgClassName?: string
  blue?: boolean
  circles2?: boolean
}

export default function Circle(props: Props) {


  return (
    <div className={props.rootClassName}>
      {!props.circles2 ?
      <Circles 
      svgClassName={props.svgClassName} 
      className1={props.blue ? styles.circle1Blue : styles.circle1} 
      className2={props.blue ? styles.circle2Blue : styles.circle2} 
      className3={props.blue ? styles.circle3Blue : styles.circle3}
      />
        :
      <Circles2 
      svgClassName={props.svgClassName} 
      className1={props.blue ? styles.circle1ForCircle2Blue : styles.circle1ForCircle2} 
      className2={props.blue ? styles.circle2Blue : styles.circle2} 
      />
      }
      {props.children}
    </div>
  )
}
