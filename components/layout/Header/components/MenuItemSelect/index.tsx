import styles from './index.module.scss'
import cx from 'classnames'
import {useRouter} from 'next/dist/client/router'
import Link from 'next/link'
import { useDetectOutsideClick } from 'components/hooks/useDetectOutsideClick'
import { useRef, useState } from 'react'

interface IItem{
  label: string,
  link?: string,
  items?: any[]
}

interface Props {
  item: IItem
  onClick?: () => void
}

export default function MenuItemSelect({item, onClick}: Props) {

  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <div className={cx(styles.root, { [styles.active]: isActive})}>
      <a onClick={handleClick}>
        <span>{item.label}</span>
        <img src="/img/icons/arrowDown.svg" alt=""/>
      </a>
      <nav ref={dropdownRef} className={cx(styles.dropDown, { [styles.dropDownActive]: isActive })}>
       {item.items.map((item, index) => <div className={styles.option}><a href={item.link} key={index + 1} onClick={() => setIsActive(false)}>
         {item.label}</a></div>)}
       </nav>
    </div>
  )
}
