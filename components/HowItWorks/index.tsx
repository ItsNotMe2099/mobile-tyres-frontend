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
import Switch from 'components/Switch'
import Circle from 'components/Circle'
import Item from 'components/Item'


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
      <Switch 
        clickOnDriver={() => who === 'driver' ? null : setWho('driver')} 
        clickOnPartner={() => who === 'partner' ? null : setWho('partner')}
        who={who}
      />
      <div className={styles.content}>
        <Circle 
        rootClassName={styles.circles}
        svgClassName={styles.circlesSvg}>
          <div className={styles.image}>
            <img src={who === 'driver' ? '/img/HowItWorks/IphoneGreen.png' : '/img/HowItWorks/IphoneBlue.png'} alt=''/>
          </div>
        </Circle>
        <div className={styles.right}>
          {cons.map(item =>
           <Item item={item}/>
          )}
        </div>
        </div>
      </div>
  )
}
