import { CONTACTS } from 'types'
import styles from './index.module.scss'


interface Props {

}

export default function Apple(props: Props) {

  return (
        <a className={styles.apple} href={CONTACTS.appStore} target='_blank' rel="noreferrer">
          <img src='/img/Main/appstore.png' alt=''/>
        </a>
  )
}
