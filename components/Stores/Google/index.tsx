import styles from './index.module.scss'
import { CONTACTS } from 'types'


interface Props {

}

export default function Google(props: Props) {

  return (
        <a className={styles.google} href={CONTACTS.googlePlay}>
          <img src='/img/Main/googleplay.png' alt=''/>
        </a>
  )
}
