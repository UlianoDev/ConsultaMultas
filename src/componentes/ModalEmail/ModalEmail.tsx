import styles from "./ModalEmail.module.css"

interface ModalEmail{
    stateModalEmail:boolean;
    setModalEmail:(value: boolean) => void;
}

export default function ModalEmail({stateModalEmail,setModalEmail}:ModalEmail){
    const sendEmail = (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const email = (document.querySelector('#email') as HTMLInputElement)?.value;
        const assunto = (document.querySelector('#assunto') as HTMLInputElement)?.value;
        const mensagem = (document.querySelector('#mensagem') as HTMLTextAreaElement)?.value;
     fetch('/api/mailer',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email,assunto,mensagem
        })
     }).then((response)=>{
        console.log(response)
        alert('Email enviado com sucesso!')
        setModalEmail(false)
     }).catch((error)=>{
        console.log(error)
        alert("Ocorreu um erro, tente novamente mais tarde")
     })   
     
    }
    return(
        <>
        {stateModalEmail ? 
        <div className={styles.container}>
            <section className={styles.section}>
               <form id="formularioEmail" className={styles.formulario} onSubmit={(e)=>sendEmail(e)}>
                <label className={styles.label} htmlFor="email">E-mail:</label>
                <input required className={styles.input} id="email" name="email" type="email" placeholder="Digite seu e-mail"/>
                <label className={styles.label} htmlFor="assunto">Assunto:</label>
                <input required className={styles.input} id="assunto" name="assunto" type="text" placeholder="Digite o assunto"/>
                <label className={styles.label} htmlFor="mensagem">Mensagem:</label>
                <textarea required className={styles.textarea} id="mensagem" name="mensagem"></textarea>
                <button className={styles.btn} >Enviar</button>
               </form>
            </section>

        </div>
        
        
        
        : null}
        </>
    )
}