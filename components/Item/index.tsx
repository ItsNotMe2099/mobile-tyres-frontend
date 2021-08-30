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
}

export default function Item({item, active, right}: Props) {


  return (
    <div className={styles.item}>
      <div className={cx(styles.itemImage, {[styles.active]: active}, {[styles.right]: right})}>
        {item.image ? item.image : item.number}
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
