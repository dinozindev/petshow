'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ServicoProps {
    nome: string;
    data: string;
    observacao: string;
}

const DetalhesUsuarioPage = () => {
    const [usuario, setUsuario] = useState<any>(null);
    const [servicos, setServicos] = useState<ServicoProps[]>([]);

    const router = useRouter();

    useEffect(() => {
        const logado = sessionStorage.getItem('logado');
        if (!logado || logado === 'false') {
            router.push('/acesso-negado'); 
        }
      const usuarioCadastrado = localStorage.getItem('usuario');
      const usuarioObtido = usuarioCadastrado ? JSON.parse(usuarioCadastrado) : null;
      setUsuario(usuarioObtido);
      const servicosCadastrados = localStorage.getItem('servicos');
      const servicosObtidos = servicosCadastrados ? JSON.parse(servicosCadastrados) : [];
      setServicos(servicosObtidos)
    }, [])

    return (
        <>
        {usuario ? 
        <main className="main__details">
            <div className="card__user">
                <h1>Detalhes do Usuário/Pet</h1>
                <p><b>Nome:</b> {usuario.nome}</p>
                <p><b>Senha:</b> {usuario.senha}</p>
                <p><b>Telefone do Proprietário:</b> {usuario.proprietario_tel}</p>
                <p><b>Tipo do Pet:</b> {usuario.tipo_pet}</p> 
                <p><b>Nome do Pet:</b> {usuario.nome_pet}</p>
                <p><b>Idade do Pet:</b> {usuario.idade_pet} ano(s)</p>
                <p><b>Raça do Pet:</b> {usuario.raca_pet}</p>
            </div>
            <div className="card__services">
                <h1>Serviço(s) agendado(s)</h1>
                <div>
                {servicos.length === 0 
                ? (<p>Nenhum Serviço agendado</p>) 
                : (servicos.map(servico => (
                            <div className="card__services--widget" key={servico.observacao}> 
                                <h2>{servico.nome}</h2>
                                <p>{new Date(servico.data).toLocaleString('pt-BR', { 
                                    year: 'numeric', 
                                    month: '2-digit', 
                                    day: '2-digit', 
                                    hour: '2-digit', 
                                    minute: '2-digit', 
                                    hour12: false 
                                })}</p>
                                <p>{servico.observacao}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
         :  <p>Carregando...</p>
        }
    </>
    )
}

export default DetalhesUsuarioPage;