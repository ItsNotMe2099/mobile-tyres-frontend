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

  const cons = [{label: 'Мгновенная помощь', desc: 'Ремонтники приедут на вызов через 10-15 минут', image: <Tire/>},
  {label: 'Прозрачные цены', desc: 'Расчет точной стоимости при оформлении заявки', image: <Dollar/>},
  {label: 'Скидки и акции', desc: 'Реальная экономия на услугах шиномонтажа', image: <Percent/>},
  {label: 'Онлайн поддержка', desc: 'Квалифицированная помощь в режиме 24/7', image: <Headphones/>},
  {label: 'Гарантия качества', desc: 'Если вас не устроит качество услуг – мы вернем деньги', image: <Quality/>}]

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Преимущества Mobil-help
      </div>
      <div className={styles.text}>
        Mobil-help – простое и удобное приложение для заказа выездного шиномонтажа в Москве.
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
