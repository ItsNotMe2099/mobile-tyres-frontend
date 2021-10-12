import Facebook from 'components/svg/Facebook'
import Instagram from 'components/svg/Instagram'
import Link from 'next/link'
import styles from './index.module.scss'
import Logo from 'components/svg/Logo'
import { CONTACTS } from 'types'
import Youtube from 'components/svg/Youtube'
import SubscribeSection from 'components/SubscribeSection'


interface Props {
}

export default function Footer(props: Props) {

  const options = [{label: 'Преимущества', link: '#'},
  {label: 'FAQ', link: '#'},
  {label: 'Поддержка', link: '#'},
  {label: 'Условия', link: '#'},
]

const about = [{label: 'Отзывы', link: '#'},
  {label: 'FAQ', link: '#'},
  {label: 'Про нас', link: '#'},
  {label: 'Работа', link: '#'},
  {label: 'Контакты', link: '#'},
]

const partners = [{label: 'Условия', link: '#'},
  {label: 'Цены', link: '#'},
  {label: 'Коммисия', link: '#'}
]

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <div className={styles.left}>
        <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>TYREAPP.RU</div>
        </div>
        </a>
        </Link>
          <div className={styles.desc}>
            Приложение принимает заказы 24/7
          </div>
          <div className={styles.email}>
            <img src="/img/icons/email.svg" alt=""/>
            <Link href={`mailto:${CONTACTS.email}`}><a
              className={styles.text}>{CONTACTS.email}</a></Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.shop}>
            <div className={styles.head}>Водителям</div>
            {options.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>Партнерам</div>
            {partners.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>Про нас</div>
            {about.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.socHead}>Мы в соцсетях:</div>
            <div className={styles.social}>
              <SubscribeSection/>
              <div className={styles.icons}>
              <Link href={`${CONTACTS.instagram}`}>
                <a className={styles.icon} target="blank"><Instagram/></a>
              </Link>
              <Link href='#'>
                <a className={styles.icon} target="blank"><Youtube/></a>
              </Link>
              <Link href={`${CONTACTS.facebook}`}>
                <a className={styles.icon} target="blank"><Facebook/></a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Tyre app  © 2021
      </div>
    </div>
  )
}
