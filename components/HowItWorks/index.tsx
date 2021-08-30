import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'


interface Props {

}

export default function HowItWorks(props: Props) {

  const [who, setWho] = useState('driver')

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Как работает наше приложение
      </div>
      <div className={styles.text}>
        Узнайте как работает наше приложение. Быстрый и удобный способ заказ шиномонтажа в Москве.
      </div>
      <div className={styles.switch}>
        <div className={styles.driver}>
          Водитель
        </div>
      </div>
    </div>
  )
}
