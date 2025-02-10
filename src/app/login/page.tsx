'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageLogin = () => {

    const router = useRouter();

    const [error, setError] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const [usuarioCadastrado, setUsuarioCadastrado] = useState('');
    const [senhaCadastrada, setSenhaCadastrada] = useState('');

    const handleLogin = () => {
        if(usuario === usuarioCadastrado && senha === senhaCadastrada) {
            sessionStorage.setItem('logado', 'true');
            router.push('/login-concluido');

            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } else {
            setError("Usuário e/ou senha incorretos.")  
        }
    }

    useEffect(() => {
        const cadastro = localStorage.getItem('usuario')
        const usuarioObtido = cadastro ? JSON.parse(cadastro) : null;
        if (usuarioObtido) {
            setUsuarioCadastrado(usuarioObtido.nome)
            setSenhaCadastrada(usuarioObtido.senha)
        } 
    }, [])

    return (
        <>
        <main className="main__page">
        <div className="login__div">
        <h1 className="page__title">Login</h1>
            <label>Usuário
                <input placeholder="Digite seu nome de usuário..." type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            </label>
            <br />
            <label>Senha
                <input placeholder="Digite sua senha..." type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </label>
            <br />
            <button onClick={handleLogin} className="submit__login">Login</button>
        {error && <p className="input__error">{error}</p>}
        </div>
        </main>
        </>
    )
}

export default PageLogin;