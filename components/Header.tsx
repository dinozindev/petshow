'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [logadoNoSite, setLogadoNoSite] = useState<any>();

  const router = useRouter()

  useEffect(() => {
    const logado = sessionStorage.getItem('logado');
    setLogadoNoSite(logado);
  }, [])

  const logout = () => {
    const logado = sessionStorage.setItem('logado', 'false');
    localStorage.setItem('usuario', '');
    localStorage.removeItem('servicos')
    setLogadoNoSite(logado)
    router.push('/logout')
    setTimeout(() => {
      window.location.reload()
  }, 1000)
  }

  return (
    <>
    <header>
        <Link href="/"><div className="logo__div">
            <Image src="/img/logo.png" alt='logo' width={50} height={50}/>
            <h1>PetShow</h1>
        </div></Link>
        <ul className="header__ul">
            <li>
            <Link href="/lista-servicos">Lista de Serviços</Link>  
            </li>
            <li>
            <Link href="/cadastro-servico">Agendar um Serviço</Link>
            </li>
            <li>
            <Link href="/detalhes-usuario">Detalhes do Usuário/Pet</Link>  
            </li>
            {logadoNoSite == "true" ? <li>
              <button onClick={logout} className="header__button">Logout</button>
            </li> :
            <>
            <li>
            <Link href="/cadastro-usuario" className="header__button">Cadastrar-se</Link>
            </li>
            <li>
              <Link href="/login" className="header__button">Login</Link>
            </li>
            </> 
            }  
        </ul>
    </header>
    </>
  )
}

export default Header