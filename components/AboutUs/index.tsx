import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Circles from 'components/svg/Circles'
import Tire from 'components/svg/Tire'
import Dollar from 'components/svg/Dollar'
import Percent from 'components/svg/Percent'
import Headphones from 'components/svg/Headphones'
import Quality from 'components/svg/Quality'


interface Props {

}

export default function AboutUs(props: Props) {

  return (
    <body className={styles.green}>
    <div className={styles.root}>
      <div className={styles.title}>
        О нас 
      </div>
      <div className={styles.text}>
        Шиномонтаж — услуга, для оказания которой необходимо наличие специализированного оборудования. Мастера проводят ряд манипуляций: аккуратно разбортируют колесо, чистят диск от грязи и окислов, при необходимости — красят, меняют покрышки, центруют. У специалистов на каждую операцию уходит несколько минут. 
      </div>
    </div>
    </body>
  )
}
