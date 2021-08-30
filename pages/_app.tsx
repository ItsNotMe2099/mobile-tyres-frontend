import 'normalize.css'
import '../scss/app.scss'
import { SWRConfig } from 'swr'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'
import swrRequest from 'utils/swrRequest'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  console.log('PageProps', pageProps)
  return (
    <SWRConfig
      value={{
        fetcher: (url) => swrRequest({ url }),
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
