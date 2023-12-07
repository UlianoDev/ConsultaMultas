
import styles from "./Header.module.css"
import ModalPesquisa from "../ModalPesquisa/ModalPesquisa";

interface HeaderProps{
    setterModal: (value: boolean) => void;
    setterCaracteres: (value:string)=>void;
}
export default function Header({ setterModal,setterCaracteres }: HeaderProps){
    const verificaMudancaInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setterModal(true)
        const qtdeCaracteres = event.target.value.length
            setterCaracteres(event.target.value);
        if(qtdeCaracteres == 0){
            setterModal(false)
        }
        
      };
    
    return(
        <div className={styles.header}>
            
        <div className={styles.div}>
        <label className={styles.label} htmlFor="buscaPorNome">Buscar autuador por nome:</label>
       <input onChange={(event)=>verificaMudancaInput(event)} className={styles.inputBusca} name="buscaPorNome" type="text" placeholder="Digite o nome de um Autuador..."/>
        
        </div>
        </div>
    )
}