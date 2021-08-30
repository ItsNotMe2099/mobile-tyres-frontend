import { useDetectOutsideClick } from 'components/hooks/useDetectOutsideClick'
import { ReactElement, useContext, useEffect, useRef, useState, forwardRef } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Dots from 'components/svg/Dots'


import { useRouter } from 'next/router'

interface Props {
  children?: any[]
}

export const ButtonDotsWithOverflow = (props: Props, ref) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = (e) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <div className={styles.root}>
      <div onClick={onClick} className={styles.dropDownTrigger}>
        <div className={styles.dots}>
          <Dots/>
        </div>
      </div>
      <nav ref={dropdownRef} className={cx(styles.dropDown, { [styles.dropDownActive]: isActive })}>
        {props.children && props.children}
      </nav>
    </div>
  )
}
ButtonDotsWithOverflow.defaultProps = {
  options: [],
}
export default ButtonDotsWithOverflow
