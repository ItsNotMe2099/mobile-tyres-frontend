import styles from './index.module.scss'
import React, {useState, useRef} from 'react'
import ArrowDown from 'components/svg/ArrowDown'
import cx from 'classnames'

interface Props {
  title: string
  content: any
}

export default function Accordion(props: Props) {

  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }

  return(
    <div className={styles.accordion__section}>
      <a className={cx(styles.accordion, {[styles.active]: setActive})} onClick={toggleAccordion}>
        <div className={styles.accordion__title}>{props.title}</div>
        <ArrowDown/>
      </a>
      <div ref={content} style={{maxHeight: `${setHeight}`}} className={styles.accordion__content}>
        <div className={styles.accordion__text}>{props.content}</div>
      </div>
    </div>
  )
}
