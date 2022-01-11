import Apple from 'components/Stores/Apple'
import Google from 'components/Stores/Google'
import Link from 'next/link'
import styles from './index.module.scss'


interface Props {
  id: string
}

export default function Main(props: Props) {

  return (
    <div className={styles.root} id={props.id}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
              Выездной шиномонтаж в Москве у вас в кармане
            </div>
            <div className={styles.desc}>
              Услуги шиномонтажа на выезде 24/7 во всех районах Москвы. Находите специалистов поблизости для быстрого ремонта или замены колес.
            </div>
            <div className={styles.stores}>
              <Google/>
              <Apple/>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.iphone}>
              <div className={styles.phone}>
              <img src='/img/Main/iPhone.png' alt=''/>
              <div className={styles.client}>
              <img src='/img/Main/client.svg' alt=''/>
            </div>
            <div className={styles.worker}>
              <img src='/img/Main/worker.svg' alt=''/>
            </div>
              </div>
            </div>
            <div className={styles.circles}>
              <img src='/img/Main/bg2.svg' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
