import styles from './index.module.scss'


interface Props {
  id?: string
}

export default function AboutUs(props: Props) {

  return (
    <body className={styles.green} id={props.id}>
    <div className={styles.root}>
      <div className={styles.title}>
        О нас 
      </div>
      <div className={styles.text}>
        Мобильное приложение Mobil-help объединяет автомобилистов и сервисы выездного монтажа через понятный и удобный интерфейс. Первым оно помогает легко и быстро заказать шиномонтаж на выезде в любом районе Москвы, а вторым – найти новые заказы и дополнительный заработок. 
      </div>
    </div>
    </body>
  )
}
