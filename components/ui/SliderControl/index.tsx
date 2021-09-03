import ArrowSlider from 'components/svg/ArrowSlider'
import styles from './index.module.scss'

interface Props {
  direction: 'next' | 'prev'
  onClick?: (e: any) => void
}



export default function SliderControl(props: Props) {

  const getClassName = () => {
    return (
      `${props.direction === 'prev' && styles.prev} ${props.direction === 'next' && styles.next}`
    )
  }

  return (
    <div className={getClassName()} onClick={props.onClick}>
      <ArrowSlider/>
    </div>
  )
}
