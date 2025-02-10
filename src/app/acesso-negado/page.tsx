import Link from "next/link";

const AcessoNegadoPage = () => {
    return (
        <>
        <main className="main__alternative">
            <h1>Acesso Negado</h1>
            <p>Cadastre-se ou realize o Login primeiro para poder acessar a página!</p>
            <div className="denied__div">
                <Link href="/">Voltar a Home</Link>
                <Link href="/cadastro-usuario">Cadastrar-se</Link>
                <Link href="/login">Login</Link>
            </div>
        </main>
        </>
    )
}

export default AcessoNegadoPage;