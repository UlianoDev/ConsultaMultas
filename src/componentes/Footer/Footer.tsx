import Link from "next/link"
import styles from "./Footer.module.css"

export default function(){
    const linkedin = "https://www.linkedin.com/in/gabriel-uliano-dev/"
    return(
        <>
        <div className={styles.div}>
        <h4  className={styles.h4}>Algum órgão autuador faltando? Faça contato comigo!</h4>
        <Link className={styles.link} href={linkedin} target="_blank"><h4  className={styles.h4}>Desenvolvido por Gabriel Uliano</h4></Link>
        </div>
        </>
    )
}