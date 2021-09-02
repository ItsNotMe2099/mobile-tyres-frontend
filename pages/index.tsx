import AboutUs from 'components/AboutUs'
import Advantages from 'components/Advantages'
import ClientsSearch from 'components/ClientsSearch'
import HowItWorks from 'components/HowItWorks'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Layout from 'components/layout/Layout'
import Main from 'components/Main'
import Price from 'components/Price'
import TireFitting from 'components/TireFitting'
import styles from './index.module.scss'

export default function Home(props) {
  return (
    <Layout>
      <body className={styles.white}>
      <Main/>
      <HowItWorks/>
      <Advantages/>
      <TireFitting/>
      <ClientsSearch/>
      <Price/>
      </body>
      <AboutUs/>
    </Layout>
  )
}

