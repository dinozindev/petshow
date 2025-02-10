
interface CardProps {
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const CardServico = ( props: CardProps ) => {
  return (
    <div className="card__servico">
        <img src={props.imagem} alt={props.nome}/>
        <div className="card__servico--info">
            <h2>{props.nome}</h2>
            <p className="card__servico--preco">R${props.preco},00</p>
            <p>{props.descricao}</p>  
        </div>
    </div>
  )
}

export default CardServico