import Footer from '@/componentes/Footer/Footer'
import Header from '@/componentes/Header/Header'
import Mapa from '@/componentes/Mapa/Mapa'
import ModalEmail from '@/componentes/ModalEmail/ModalEmail'
import ModalPesquisa from '@/componentes/ModalPesquisa/ModalPesquisa'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [modalPesquisa,setModalPesquisa] = useState(false);
  const [caracteresPesquisados, setCaracteresPesquisados] = useState('');
useEffect(()=>{
  const handleClickOutside = (event:MouseEvent) => {
    const minhaClasse = document.getElementsByClassName("TabelaPesquisa_tableContainer__EHlY3")[0]
    if( minhaClasse && !minhaClasse.contains(event.target as Node)){
      setModalPesquisa(false)
    }
  
  };

  document.addEventListener('click', handleClickOutside);

  return ()=>{
    document.removeEventListener('click',handleClickOutside)
  }

},[]);

const [modalEmail,setModalEmail] = useState(false)

useEffect(()=>{
  const handleClickOutsideModalEmail = (event:MouseEvent) => {
    const minhaClasse = document.getElementsByClassName("ModalEmail_formulario__hszHE")[0]
    const footerClasse = document.getElementsByClassName("Footer_container__tjggg")[0]
    if( minhaClasse && !minhaClasse.contains(event.target as Node) && !footerClasse.contains(event.target as Node) ){
      setModalEmail(false)
    }
  
  };

  document.addEventListener('click', handleClickOutsideModalEmail);

  return ()=>{
    document.removeEventListener('click',handleClickOutsideModalEmail)
  }

},[]);

  return (

    <>
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Header setterModal={setModalPesquisa} setterCaracteres={setCaracteresPesquisados}/>
      <ModalPesquisa stateModal={modalPesquisa} stateCaracteres={caracteresPesquisados}/>
      <ModalEmail stateModalEmail={modalEmail} setModalEmail={setModalEmail}/>
     <Mapa>
     <Component {...pageProps} />
     </Mapa>

    <Footer setModalEmail={setModalEmail}/>
    </>
  )
}
