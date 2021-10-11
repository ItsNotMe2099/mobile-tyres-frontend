import styles from './index.module.scss'


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
        Мобильное приложение TyreApp объединяет автомобилистов и сервисы выездного монтажа через понятный и удобный интерфейс. Первым оно помогает легко и быстро заказать шиномонтаж на выезде в любом районе Москвы, а вторым – найти новые заказы и дополнительный заработок. 
      </div>
    </div>
    </body>
  )
}
