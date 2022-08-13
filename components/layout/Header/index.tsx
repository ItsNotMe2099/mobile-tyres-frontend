import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'
import DynamicOverflow from 'utils/DynamicOverflow'
import ButtonDotsWithOverflow from 'components/ui/Button/ButtonDotsWithOverflow';
import cx from 'classnames'
import { useEffect, useState } from 'react'
import MenuMobile from 'components/svg/MenuMobile'
import MenuMobileClose from 'components/svg/MenuMobileClose'
import { useRouter } from 'next/router'
import MenuItemSelect from './components/MenuItemSelect'
import Download from 'components/svg/Download'

interface Props {}

export default function Header(props: Props) {

  const options = [{label: 'Главная', link: '/#main'},
  {label: 'Услуги', link: '/#services'},
  {label: 'Клиентам', link: '/#forClients'},
  {label: 'Партнерам', link: '/#forPartners'},
  {label: 'Отзывы', link: '/#reviews'},
  {label: 'FAQ', link: '/#faq'},
  {label: 'Поддержка', link: 'https://t.me/Mobil_help'},
]

const [isMenuMobileOpen, setMenuMobileOpen] = useState(false)

const router = useRouter()

const handleOpenMobileMenu = () => {
  if (process.browser) {
    document.body.classList.add('modal-open')
  }

  setMenuMobileOpen(true)
}

const handleCloseMobileMenu = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
  setMenuMobileOpen(false)
}

const handleClearBodyClass = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
}

  return (
    <>
    <div className={styles.root}>
      <div className={styles.container}>
      <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>Mobil-help</div>
        </div>
        </a>
        </Link>
        <div className={styles.list}>
            {options.map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          </div>
          <div className={styles.listMedium}>
            {options.slice(0, 6).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(6, 7).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listSmall}>
            {options.slice(0, 5).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(5, 7).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listExtraSmall}>
            {options.slice(0, 4).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(4, 7).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listSuperSmall}>
            {options.slice(0, 3).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(3, 7).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
          <div className={styles.listTwoItems}>
            {options.slice(0, 2).map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                >
                  {item.label}
                </a>
              </Link>
            ))
          }
          <ButtonDotsWithOverflow>
          {options.slice(2, 7).map(item => (
            <Link href={item.link}>
            <a
              className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
              href={item.link}
            >
              {item.label}
            </a>
          </Link>
          ))}
          </ButtonDotsWithOverflow>
          </div>
        <Button size='large' color='green'>СКАЧАТЬ БЕСПЛАТНО</Button>
      </div>
    </div>
    <div className={styles.headerMobile}>
        <div className={styles.container}>
        <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>Mobil-help</div>
        </div>
        </a>
        </Link>
        <div className={styles.right}>
        {/*<Button size='mobile' color='green'><Download/></Button>*/}
        {!isMenuMobileOpen && (
          <div
            className={styles.menuOpen}
            onClick={handleOpenMobileMenu}
          >
            <MenuMobile/>
          </div>
        )}
        {isMenuMobileOpen && (
          <div className={styles.menuOpen} onClick={handleCloseMobileMenu}>
            <MenuMobileClose />
          </div>
        )}
        </div>
         {isMenuMobileOpen && (
        <div className={styles.dropdownMobile}>
            <div className={styles.listMobile}>
              {options.map((item) => (
                <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
                  href={item.link}
                  onClick={handleCloseMobileMenu}
                >
                  {item.label}
                </a>
              </Link>
              ))}
            </div>
        </div>
      )}
        </div>
        </div>
    </>
  )
}
