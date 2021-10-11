import Circle from 'components/Circle'
import Item from 'components/Item'
import Switch from 'components/Switch'
import { useState } from 'react'
import styles from './index.module.scss'



interface Props {

}

export default function Advantages(props: Props) {

const left = [{label: 'Заказ услуги', desc: 'Вы указываете свое местоположение, причину вызова (ремонт, переобувка), радиус колес и тип повреждений', number: '1'},
{label: 'Поиск специалиста', desc: 'После нажатия на кнопку «Вызвать помощь» ваш заказ направляется всем ремонтникам, находящимся поблизости', number: '2'}]

const right = [{label: 'Выполнение заказа', desc: 'Исполнитель берет заказ, приезжает к вам в течение 10-15 минут и делает свою работу', number: '3'},
{label: 'Оплата и оценка', desc: 'Вы принимаете результат, оплачиваете услугу и ставите оценку исполнителю', number: '4'}]

const [who, setWho] = useState('driver')

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Как это работает?
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
