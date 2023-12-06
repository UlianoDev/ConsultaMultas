import db from "../../data/db_personalizado.json"
import styles from "./Tabela.module.css"

interface orgao{
    nomeOrgao: string;
    codigoOrgao: string;
    site: string;
}

export default function Tabela(siglaEstado:any){
    const data = db.SP;
    console.log(data)
    if (!data || !Array.isArray(data)) {
        return <div>Dados inválidos</div>;
      }
     
    return(
        <nav className={styles.tableContainer}>
        <table border={1} className={styles.table}>
        <thead className={styles.thead}>
            <tr className={styles.tr}>
            <th className={styles.th}>Nome Órgão</th>
            <th className={styles.th}>Código Órgão</th>
           <th className={styles.th}>Código Órgão</th>
            </tr>
        </thead >
        <tbody className={styles.tbody}>
        {data.map((obj)=><tr className={styles.tr}><td className={styles.td}>{obj.nomeOrgao}</td><td className={styles.td}>{obj.codigoOrgao}</td><td className={styles.td}><a className={styles.link} href={obj.site} target="_blank">Clique Aqui</a></td></tr>)}
        </tbody>


    </table>
    </nav>
    )
}