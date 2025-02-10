'use client'

import cachorro from "../../public/img/cachorro-main.png"
import Image from "next/image";
import LinkButton from "../../components/LinkButton";


export default function Home() {
  return (
    <> 
    <main className="main__page">
      <div>
        <h1>Tudo que seu Pet precisa!</h1>
        <p>Tosas, Banhos, Estádias e muito mais!</p>
        <div className="home__link--div">
        <LinkButton link="/lista-servicos" name="Serviços" />
        <LinkButton link="/cadastro-servico" name="Agendar" />
        </div>
      </div>
      <Image src={cachorro} alt="cachorro" width={500} height={700}/>
    </main>
    </>
  );
}
