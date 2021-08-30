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

export default function HowItWorks(props: Props) {

  const [who, setWho] = useState('driver')

  const cons = [{label: 'Мгновенная помощь', desc: 'Узнайте как работает наше приложение.', image: <Tire/>},
  {label: 'Прозрачные цены', desc: 'Узнайте как работает наше приложение.', image: <Dollar/>},
  {label: 'Скидки и акции', desc: 'Узнайте как работает наше приложение.', image: <Percent/>},
  {label: 'Онлайн поддержка', desc: 'Узнайте как работает наше приложение.', image: <Headphones/>},
  {label: 'Гарантия качества', desc: 'Узнайте как работает наше приложение.', image: <Quality/>}]

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Как работает наше приложение
      </div>
      <div className={styles.text}>
        Узнайте как работает наше приложение. Быстрый и удобный способ заказ шиномонтажа в Москве.
      </div>
      <div className={styles.switch}>
        <div onClick={() => who === 'driver' ? null : setWho('driver')} className={cx(styles.driver, {[styles.activeDriver]: who === 'driver'})}>
          Водитель
        </div>
        <div onClick={() => who === 'partner' ? null : setWho('partner')} className={cx(styles.driver, {[styles.activePartner]: who === 'partner'})}>
          Партнер
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.circles}>
          <Circles svgClassName={styles.circlesSvg} className1={styles.circle1} className2={styles.circle2} className3={styles.circle3}/>
          <div className={styles.image}>
            <img src={who === 'driver' ? '/img/HowItWorks/IphoneGreen.png' : '/img/HowItWorks/IphoneBlue.png'} alt=''/>
          </div>
        </div>
        <div className={styles.right}>
          {cons.map(item =>
           <div className={styles.item}>
              <div className={styles.itemImage}>
                {item.image}
              </div>
              <div className={styles.label}>
                {item.label}
              </div>
              <div className={styles.desc}>
                {item.desc}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
