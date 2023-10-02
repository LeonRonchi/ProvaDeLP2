import React, { useState } from "react";
import Produto from "../templates/Produto";

export default function GradeProdutos(props){
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
    const [carrinho, setCarrinho] = useState([]);

    const atualizarQuantidadeCarrinho = (quantidade, produto) => {
        setQuantidadeCarrinho(quantidadeCarrinho + quantidade);
        setCarrinho([...carrinho, produto]);
      };

    if (props.listaProdutos){
        return(
            <div style={{
                width: '100%', 
                display: 'flex', 
                flexWrap: 'wrap',
                alignItems: 'center', 
                margin: '10px',
                padding: '10px',
                gap: '20px'}}
            >
                {props.listaProdutos.map((produto) => (

                <Produto
                    key={produto.id}
                    produto={produto}
                    atualizarQuantidadeCarrinho={atualizarQuantidadeCarrinho}
                />
            ))}
            </div>
        )
    }
    else{
        return (<h1>Carregando...</h1>)
    }
}