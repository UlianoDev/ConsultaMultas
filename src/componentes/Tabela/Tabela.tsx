import db from "../../data/db_personalizado.json"
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
        <table border={1}>
        <thead>
            <tr>
            <th>Nome Órgão</th>
            <th>Código Órgão</th>
           <th>Código Órgão</th>
            </tr>
        </thead>
        <tbody>
        {data.map((obj)=><tr><td>{obj.nomeOrgao}</td><td>{obj.codigoOrgao}</td><td><a href={obj.site} target="_blank">Clique Aqui</a></td></tr>)}
        </tbody>


    </table>
    )
}