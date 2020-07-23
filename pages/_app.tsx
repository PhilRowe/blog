import '../css/index.css'
import { AppProps } from 'next/app'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
