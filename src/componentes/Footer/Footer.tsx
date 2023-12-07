import Link from "next/link"
import styles from "./Footer.module.css"

export default function({setModalEmail}:{setModalEmail:any}){
    const linkedin = "https://www.linkedin.com/in/gabriel-uliano-dev/"
    const enviarEmail = () => {
        setModalEmail(true)
      };
    return(
        <>
        <div className={styles.container}>
        <h4  className={styles.h4} onClick={enviarEmail}>Algum órgão autuador faltando? Faça contato comigo!</h4>
        <Link className={styles.link} href={linkedin} target="_blank"><h4  className={styles.h4}>Desenvolvido por Gabriel Uliano</h4></Link>
        </div>
        </>
    )
}