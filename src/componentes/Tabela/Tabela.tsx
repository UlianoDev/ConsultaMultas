import db from "../../data/db_personalizado.json"
import styles from "./Tabela.module.css"
import db_default from "../../data/db.json"
import stylesPesquisa from "./TabelaPesquisa.module.css"

interface Orgao{
    nomeOrgao: string;
    codigoOrgao: string;
    site: string;
}
interface TabelaProps {
    siglaEstado: string;
    tabelaPesquisar?: boolean;
    caracteresPesquisados?: string;
  }

export default function Tabela({siglaEstado, tabelaPesquisar,caracteresPesquisados}:TabelaProps){
    const data = db[siglaEstado as keyof typeof db];
    const dataPesquisa = db_default.data;

    
    if(tabelaPesquisar  && caracteresPesquisados !== undefined){
        const resultadosPesquisa = dataPesquisa.filter((item) =>
        removerAcentos(item.nomeOrgao.toLowerCase()).includes(
          removerAcentos(caracteresPesquisados.toLowerCase())
        )
      );
            if(resultadosPesquisa.length == 0){
                return(templateTabela(stylesPesquisa,resultadosPesquisa,false))
            }
        return(
            templateTabela(stylesPesquisa,resultadosPesquisa,true)
        )
    }
    if (!data || !Array.isArray(data)) {
        return <div>Dados inválidos</div>;
      }

    return(
        templateTabela(styles,data,true)
    )
}

function removerAcentos(texto:string) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function templateTabela(css: any, db:any, renderizarBody: boolean){

    const body = db.map((obj: Orgao, index:number)=>{
      const key = obj.codigoOrgao || `fallbackKey_${index}`;
      return(
      <tr className={css.tr} key={key}>
        <td className={css.td}>{obj.nomeOrgao.toUpperCase()}</td>
        <td className={css.td}>{obj.codigoOrgao}</td>
        <td className={css.td}><a className={css.link} href={obj.site} target="_blank">Clique Aqui</a></td>
        </tr>
      )
    })
    return(
        <nav className={css.tableContainer}>
        <table border={1} className={css.table}>
        <thead className={css.thead}>
            <tr className={css.tr}>
            <th className={css.th}>Nome Órgão</th>
            <th className={css.th}>Código Órgão</th>
           <th className={css.th}>Link</th>
            </tr>
        </thead >
        <tbody className={css.tbody}>
        {renderizarBody ? body : <tr>
          <td colSpan={3}>Nenhum órgão autuador encontrado!</td>
        </tr>}
        </tbody>


    </table>
    </nav>
    )
}