import Circle from 'components/Circle'
import Apple from 'components/Stores/Apple'
import Google from 'components/Stores/Google'
import styles from './index.module.scss'


interface Props {

}

export default function TireFitting(props: Props) {

  return (
    <body className={styles.green}>
      <div className={styles.bg}>
        <img src='/img/TireFitting/car.svg' alt=''/>
      </div>
      <div className={styles.root}>
      <Circle
        rootClassName={styles.circles}
        svgClassName={styles.circlesSvg}
        circles2
        >
          <div className={styles.image}>
            <img src='/img/Advantages/IphoneGreen.png' alt=''/>
          </div>
        </Circle>
        <div className={styles.right}>
          <div className={styles.title}>
            Выездной шиномонтаж 
          </div>
          <div className={styles.text}>
            Шиномонтаж — услуга, для оказания которой необходимо наличие специализированного оборудования. Мастера проводят ряд манипуляций: аккуратно разбортируют колесо, чистят диск от грязи и окислов, при необходимости — красят, меняют покрышки, центруют. У специалистов на каждую операцию уходит несколько минут. 
          </div>
          <div className={styles.stores}>
            <Google/>
            <Apple/>
          </div>
        </div>
      </div>
    </body>
  )
}
