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
            Онлайн поиск клиентов 
          </div>
          <div className={styles.text}>
            Проверка качества осуществляется с помощью специальной компьютеризированной аппаратуры, показывающей на дисплее все недочеты и дающей рекомендации по их устранению. От того, насколько правильно все сделано, зависит безопасность водителя и пассажиров 
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
