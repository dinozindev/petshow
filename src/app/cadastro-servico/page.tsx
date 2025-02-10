'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required('Nome do serviço é obrigatório'),
    data: yup.date().min(new Date(), 'A data não pode ser anterior ao dia atual').required('A data do serviço é obrigatória').typeError('A data deve ter um valor válido'),
    observacao: yup.string().required('Observação é obrigatória.')
})

const CadastroServicoPage = () => {
    const [listaServicos, setListaServicos] = useState<any[]>([]);
    
    const router = useRouter();

    useEffect(() => {
        const logado = sessionStorage.getItem('logado');
        if (!logado || logado === 'false') {
            router.push('/acesso-negado'); 
        }
        const servicos = localStorage.getItem('servicos');
        const servicosObtidos = servicos == null ? [] : JSON.parse(servicos);
        setListaServicos(servicosObtidos);
    }, []);

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const inserirServico = (servico : any) => {
        const listaAtualizada = [...listaServicos, servico]
        setListaServicos(listaAtualizada)
        localStorage.setItem("servicos", JSON.stringify(listaAtualizada))
        router.push('/cadastro-concluido')
    }

  return (
    <>
    <h1 className="page__title">Agendar um Serviço</h1>
    <form onSubmit={handleSubmit(inserirServico)} className="form__cadastro--service">
        <label>Tipo do Serviço
            <select {...register('nome')} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Selecione o tipo de Serviço...</option>
            <option value="Banho">Banho</option>
            <option value="Tosa Completa">Tosa Completa</option>
            <option value="Tosa Higiênica">Tosa Higiênica</option>
            <option value="Consulta Veterinária">Consulta Veterinária</option>
            <option value="Hotel Pet">Hotel Pet</option>
            <option value="Daycare (Creche)">Daycare (Creche)</option>
            <option value="Adestramento">Adestramento</option>
            <option value="Transporte do Pet">Transporte do Pet</option>
            </select>
            <span className="input__error">{errors.nome?.message}</span>
        </label>
        <br/>
        <label>Data do Serviço
            <input type="datetime-local" {...register('data')}/>
            <span className="input__error">{errors.data?.message}</span>
        </label>
        <br />
        <label>Observações
            <input type="text" {...register('observacao')}/>
            <span className="input__error">{errors.observacao?.message}</span>
        </label>
        <br />
        <input type="submit" className="input__submit" />
    </form>
    </>
  )
}

export default CadastroServicoPage