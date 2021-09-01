import styles from './index.module.scss'
import Circles from 'components/svg/Circles'
import cx from 'classnames'

interface IItem{
  label: string
  image?: any
  desc: string
  number?: string
}


interface Props {
  item: IItem
  active?: boolean
  right?: boolean
  line?: boolean
  left?: boolean
}

export default function Item({item, active, right, line, left}: Props) {


  return (
    <div className={styles.item}>
      <div className={cx(styles.itemImage, {[styles.active]: active}, {[styles.right]: right})}>
        {item.image ? item.image : item.number}
        <div className={cx(styles.line, {[styles.lineRight]: right}, {[styles.none]: !line}, {[styles.lineLeft]: left})}>
          <img src='/img/Advantages/line.svg' alt=''/>
        </div>
      </div>
      <div className={cx(styles.label, {[styles.right]: right})}>
        {item.label}
      </div>
      <div className={cx(styles.desc, {[styles.right]: right})}>
        {item.desc}
      </div>
    </div>
  )
}
