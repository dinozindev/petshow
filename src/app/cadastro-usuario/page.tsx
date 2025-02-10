'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

const schema = yup.object().shape({
    nome: yup.string().required('Nome do usuário é obrigatório'),
    senha: yup.string().required('A senha é obrigatória.'),
    proprietario_tel: yup.string().length(11, 'Telefone deve ter 11 dígitos.').required('O nome do proprietário é obrigatório'),
    tipo_pet: yup.string().required('O tipo do pet é obrigatório'),
    nome_pet: yup.string().required('O nome do pet é obrigatório'),
    raca_pet: yup.string().required('A raça/espécie do pet é obrigatória'),
    idade_pet: yup.number().required('A idade do pet é obrigatória.').typeError('A idade do pet deve ser um número inteiro.')
})

const CadastroUsuarioPage = () => {

    const router = useRouter();

    const [usuario, setUsuario] = useState();

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const inserirUsuario = (usuario : any) => {
        setUsuario(usuario)
        localStorage.setItem("usuario", JSON.stringify(usuario))
        router.push("/cadastro-concluido")
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (
        <>
        <h1 className="page__title">Cadastro</h1>
        <form onSubmit={handleSubmit(inserirUsuario)}>
        <label>Nome do Usuário
            <input placeholder="Digite um nome de usuário..." type="text" {...register('nome') }/>
            <span className="input__error">{errors.nome?.message}</span>
        </label>
        <br />
        <label>Senha
            <input placeholder="Digite uma senha..." type="password" {...register('senha')} />
            <span className="input__error">{errors.senha?.message}</span>
        </label>
        <br />
        <label>Telefone
            <input placeholder="Digite seu telefone..." type="text" {...register('proprietario_tel')} />
            <span className="input__error">{errors.proprietario_tel?.message}</span>
        </label>
        <br />
        <label>Tipo do Pet
            <select {...register('tipo_pet')} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Selecione o tipo de Pet...</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Pássaro">Pássaro</option>
            <option value="Peixe">Peixe</option>
            <option value="Roedor">Roedor</option>
            </select>
            <span className="input__error">{errors.tipo_pet?.message}</span>
        </label>
        <br />
        <label>Nome do Pet
            <input placeholder="Digite o nome do seu pet..." type="text" {...register('nome_pet')} />
            <span className="input__error">{errors.nome_pet?.message}</span>
        </label>
        <br />
        <label>Raça/Espécie do Pet
            <input placeholder="Digite a raça/espécie do seu pet..." type="text" {...register('raca_pet')} />
            <span className="input__error">{errors.raca_pet?.message}</span>
        </label>
        <br />
        <label>Idade do Pet
            <input placeholder="Digite a idade do pet..." type="text" {...register('idade_pet')} />
            <span className="input__error">{errors.idade_pet?.message}</span>
        </label>
        <br />
        <input type="submit" className="input__submit" />
        </form>
        </>
    )
}

export default CadastroUsuarioPage;