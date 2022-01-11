import Circle from 'components/Circle'
import Apple from 'components/Stores/Apple'
import Google from 'components/Stores/Google'
import styles from './index.module.scss'


interface Props {
  id?: string
}

export default function TireFitting(props: Props) {

  return (
    <div id={props.id}>
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
            Удобный сервис для автовладельцев
          </div>
          <div className={styles.text}>
            Выездной шиномонтаж – это комфорт и экономия времени на поездку в автосервис и ожидание в очередях. Мастера-ремонтники быстро приедут в любой район Москвы с полным комплектом оборудования и слаженно выполнят все необходимые процедуры: монтаж/демонтаж колеса, ремонт камеры, вулканизация, подкачка воздуха, смена колес и т.д. 
          </div>
          <div className={styles.stores}>
            <Google/>
            <Apple/>
          </div>
        </div>
      </div>
    </body>
    </div>
  )
}
