import styles from "./Header.module.css"


export default function Header(){
    return(
        <div className={styles.header}>
        <div className={styles.div}>
        <label className={styles.label} htmlFor="buscaPorNome">Buscar autuador por nome:</label>
       <input className={styles.inputBusca} name="buscaPorNome" type="text" placeholder="Digite o nome de um Autuador..."/>

       <label className={styles.label} htmlFor="buscaPorCodigo">Buscar autuador por codigo:</label>
       <input className={styles.inputBusca} name="buscaPorCodigo" type="number" placeholder="Digite o codigo de um Autuador..."/>
        </div>
        </div>
    )
}