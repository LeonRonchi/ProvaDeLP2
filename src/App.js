import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";

function App() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const atualizarQuantidadeCarrinho = (quantidade, produto) => {
    setQuantidadeCarrinho(quantidadeCarrinho + quantidade);
    setCarrinho([...carrinho, produto]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca/>
      <GradeProdutos listaProdutos={produtos}
      atualizarQuantidadeCarrinho={atualizarQuantidadeCarrinho}/>
    </div>
  );
}

export default App;