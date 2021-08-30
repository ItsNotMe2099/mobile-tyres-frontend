import AboutUs from 'components/AboutUs'
import HowItWorks from 'components/HowItWorks'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Layout from 'components/layout/Layout'
import Main from 'components/Main'
import styles from './index.module.scss'

export default function Home(props) {
  return (
    <Layout>
      <body className={styles.white}>
      <Main/>
      <HowItWorks/>
      </body>
      <AboutUs/>
    </Layout>
  )
}

