import '../css/index.css'
import { AppProps } from 'next/app'
import Footer from '../components/footer'

import * as Fathom from 'fathom-client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('GLCOKXMM', {
      excludedDomains: ['localhost'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
