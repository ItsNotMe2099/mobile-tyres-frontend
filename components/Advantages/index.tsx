import Circle from 'components/Circle'
import Item from 'components/Item'
import Switch from 'components/Switch'
import { useState } from 'react'
import styles from './index.module.scss'



interface Props {

}

export default function Advantages(props: Props) {

const left = [{label: 'Онлайн оплата', desc: 'Узнайте как работает наше приложение.', number: '1'},
{label: 'Проверенные мастера', desc: 'Узнайте как работает наше приложение.', number: '2'}]

const right = [{label: 'Репорты и статистика', desc: 'Узнайте как работает наше приложение.', number: '3'},
{label: 'Онлайн поддержка', desc: 'Узнайте как работает наше приложение.', number: '4'}]

const [who, setWho] = useState('driver')

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Наши преимущества
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          {left.map(item =>
            item.number === '1' ?
            <Item item={item} right active line/>
            :
            <Item item={item} right line/>
          )}
        </div>
        <Circle
        rootClassName={styles.circles}
        svgClassName={styles.circlesSvg}
        circles2
        >
          <div className={styles.image}>
            <img src={who === 'driver' ? '/img/Advantages/IphoneGreen.png' : '/img/Advantages/IphoneBlue.png'} alt=''/>
          </div>
        </Circle>
        <div className={styles.right}>
          {right.map(item =>
            <Item item={item} line left/>
          )}
        </div>
      </div>
      <Switch 
        clickOnDriver={() => who === 'driver' ? null : setWho('driver')} 
        clickOnPartner={() => who === 'partner' ? null : setWho('partner')}
        who={who}
      />
      <div className={styles.mobileItems}>
          {[...left, ...right].map(item =>
            <Item item={item}/>
          )}
        </div>
    </div>
  )
}
