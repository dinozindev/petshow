import LinkButton from "../../../components/LinkButton";

const LoginConcluidoPage = () => {
    return (
        <>
        <main className="main__alternative">
            <h1 className="page__title">Login realizado com sucesso!</h1>
            <LinkButton name="Home" link="/"/>
        </main>
        </>
    )
}

export default LoginConcluidoPage;