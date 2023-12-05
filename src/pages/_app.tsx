import Footer from '@/componentes/Footer/Footer'
import Header from '@/componentes/Header/Header'
import Mapa from '@/componentes/Mapa/Mapa'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
     <Mapa>
     <Component {...pageProps} />
     </Mapa>

    <Footer/>
    </>
  )
}
