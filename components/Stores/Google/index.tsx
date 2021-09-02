import Link from 'next/link'
import styles from './index.module.scss'


interface Props {

}

export default function Google(props: Props) {

  return (
      <Link href="#">
        <a className={styles.google}>
          <img src='/img/Main/googleplay.png' alt=''/>
        </a>
      </Link>
  )
}
