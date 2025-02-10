'use client'
import LinkButton from "../../../components/LinkButton";

const CadastroConcluidoPage = () => {
    return (
        <>
        <main className="main__alternative">
            <h1 className="page__title">Cadastro realizado com sucesso!</h1>
            <LinkButton name="Home" link="/"/>
        </main>
        </>
    )
}

export default CadastroConcluidoPage;