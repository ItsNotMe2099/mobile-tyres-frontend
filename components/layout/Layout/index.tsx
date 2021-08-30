import Footer from '../Footer'
import Header from '../Header'
import styles from './index.module.scss'

interface Props{
  children?: any
}

export default function Layout({children}: Props){

   return (
    <div className={styles.root}>
      <Header/>
      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
