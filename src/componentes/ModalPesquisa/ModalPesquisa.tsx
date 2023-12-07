import Tabela from "../Tabela/Tabela"
import styles from "./ModalPesquisa.module.css"

interface ModalPesquisa{
    stateModal:boolean;
    stateCaracteres: string;
}
export default function ModalPesquisa({stateModal,stateCaracteres}:ModalPesquisa){

    return(
        <>
        {stateModal ? 
        <div className={styles.container}>
            <section className={styles.section}>
                <Tabela siglaEstado="" tabelaPesquisar={true} caracteresPesquisados={stateCaracteres} />
            </section>

        </div>
        
        
        
        : null}
        </>
    )
}