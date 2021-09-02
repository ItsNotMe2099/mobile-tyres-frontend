import Link from 'next/link'
import styles from './index.module.scss'


interface Props {

}

export default function Apple(props: Props) {

  return (
      <Link href="#">
        <a className={styles.apple}>
          <img src='/img/Main/appstore.png' alt=''/>
        </a>
      </Link>
  )
}
