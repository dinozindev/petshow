'use client'
import { useEffect, useState } from "react";
import CardServico from "../../../components/CardServico";


const ServicosPage = () => {
  const [listaServicos, setListaServicos] = useState<any[]>([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const res = await fetch('/api/servicos.json'); 
                const data = await res.json();
                setListaServicos(data)
            } catch (error) {
                console.log("Erro ao buscar os serviços: ", error);
            }
        }
        fetchServicos();
    }, []);


  return (
    <>
    <h1 className="page__title">Lista de Serviços</h1>
    <div className="servicos__div">
     {listaServicos.map(servico => (
        <CardServico key={servico.id} nome={servico.nome} descricao={servico.descricao} preco={servico.preco} imagem={servico.imagem}/>
    ))}
    </div>
    </>
  )
}

export default ServicosPage