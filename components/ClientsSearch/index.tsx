import Circle from 'components/Circle'
import Apple from 'components/Stores/Apple'
import Google from 'components/Stores/Google'
import styles from './index.module.scss'


interface Props {

}

export default function ClientsSearch(props: Props) {

  return (
    <body className={styles.blue}>
      <div className={styles.bg}>
        <img src='/img/ClientsSearch/worker.svg' alt=''/>
      </div>
      <div className={styles.root}>
        <div className={styles.right}>
          <div className={styles.title}>
            Стабильные заказы для шиномонтажников
          </div>
          <div className={styles.text}>
            Регистрация в нашем приложении даст вам стабильный источник заказов на услуги выездного шиномонтажа в Москве. С ним вам не придется тратить время и деньги на поиск новых клиентов – просто берите заказы где и когда угодно, качественно делайте свою работу и получайте достойную оплату. 
          </div>
          <div className={styles.stores}>
            <Google/>
            <Apple/>
          </div>
        </div>
        <Circle
        rootClassName={styles.circles}
        svgClassName={styles.circlesSvg}
        circles2
        blue
        >
          <div className={styles.image}>
            <img src='/img/Advantages/IphoneBlue.png' alt=''/>
          </div>
        </Circle>
      </div>
    </body>
  )
}
