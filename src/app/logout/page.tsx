'use client'

import LinkButton from "../../../components/LinkButton";

const LogoutPage = () => {
    return (
        <>
        <main className="main__alternative">
            <h1 className="page__title">Desconectado</h1>
            <LinkButton name="Home" link="/"/>
        </main>
        </>
    )
}

export default LogoutPage;