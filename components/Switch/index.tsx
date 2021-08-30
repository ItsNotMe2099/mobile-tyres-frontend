import Link from 'next/link'
import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Circles from 'components/svg/Circles'
import Tire from 'components/svg/Tire'
import Dollar from 'components/svg/Dollar'
import Percent from 'components/svg/Percent'
import Headphones from 'components/svg/Headphones'
import Quality from 'components/svg/Quality'


interface Props {
  clickOnDriver: () => void
  clickOnPartner: () => void
  who: string
}

export default function Switch(props: Props) {

  const [who, setWho] = useState('driver')

  return (
      <div className={styles.switch}>
        <div onClick={props.clickOnDriver} className={cx(styles.driver, {[styles.activeDriver]: props.who === 'driver'})}>
          Водитель
        </div>
        <div onClick={props.clickOnPartner} className={cx(styles.driver, {[styles.activePartner]: props.who === 'partner'})}>
          Партнер
        </div>
      </div>
  )
}
