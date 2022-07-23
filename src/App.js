import React, { useEffect, useState } from "react";
import { ContainerPrincipal, CompraCarrinho, CardPost } from "./style";
import Filtter from "./Components/Filter/Filtter";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { MockDeDados } from "./MockDeDados";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`

function App() {
  const [dadosMockDeDados] = useState(MockDeDados);
  const [homeOrdem, setHomeOrdem] = useState("asc");
  const [quantidadeItensCart, setQuantidadeItensCart] = useState("");
  const [inputValorMinimo, setInputValorMinimo] = useState(-Infinity);
  const [inputValorMaximo, setInputValorMaximo] = useState(Infinity);
  const [inputNomeProduto, setInputNomeProduto] = useState("");
  const [compras, setCompras] = useState([]);
  const [valorTotalCompra, setValorTotalCompra] = useState(0);
  

  const posts = dadosMockDeDados
    .filter((dadoMock) => {
      return dadoMock.nameProd
        .toLowerCase()
        .includes(inputNomeProduto.toLowerCase());
    })
  .filter((dadoMock)=>{
    return dadoMock.nameProd.toLowerCase().includes(inputNomeProduto.toLowerCase())
  })
  .filter((dadoMock)=>{
    return dadoMock.price >= inputValorMinimo || inputValorMinimo === ""
  })
  .filter((dadoMock)=>{
    return dadoMock.price <= inputValorMaximo || inputValorMaximo === ""
  })
  .sort((x,y)=>{
    switch (homeOrdem){
      case "asc":
        return x.price - y.price
      default:
        return y.price - x.price
    }
  })
  
  function quantidadeDeItemCart() {
    const valor = posts.length;
    return valor;
  }

  useEffect(() => {
    setQuantidadeItensCart(quantidadeDeItemCart());
  }, [posts]);

  useEffect(() => {
    setValorTotalCompra(totalCompra());
  }, [compras]);

  useEffect(()=>{
    localStorage.setItem("valorTotal", `${valorTotalCompra}`)
    localStorage.getItem("valorTotal")
  }, [valorTotalCompra])

/*   useEffect(()=>{
    localStorage.setItem("lista", JSON.stringify(compras))
    const lista = localStorage.getItem("lista")
    lista = JSON.parse(lista)
  }, [compras])

  console.log(compras) */

  const listaPosts = posts.map((dadoMock, index, array) => {
    return (
      <CardPost key={index}>
        <img src={dadoMock.photo} alt="Imagem do produto"></img>
        <h3>{dadoMock.nameProd}</h3>
        <p>R${dadoMock.price},00</p>
        <button
          onClick={() => {
            adicionarProduto(dadoMock, index, array);
          }}
        >
          Adicionar ao carrinho
        </button>
      </CardPost>
    );
  });

  function totalCompra() {
    const valorTotal =
      compras
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0) || 0;
    return valorTotal;
  }

  const adicionarProduto = (dadoMock, index, array) => {

    const listaCompras = [
      ...compras,
      {
        id: dadoMock.id,
        quantidade: dadoMock.quantidade,
        nameProd: dadoMock.nameProd,
        price: dadoMock.price
      }
    ]

    setCompras(listaCompras)

  };


  const remover = (postId) => {
    const listaAtualizada = compras.filter((compra, index) => {
      return compra.id !== postId;
    });
    setCompras(listaAtualizada);
  };

  const listaDeCompras = compras.map((post, index) => {

    return (
      <CompraCarrinho key={index}>
        <p>{post.quantidade}x</p>
        <p>{post.nameProd}</p>        
        <button
          onClick={() => {
            remover(post.id);
          }}
        >
          Remover
        </button>
      </CompraCarrinho>
    );
  });
 
  return (
    <ContainerPrincipal>
      <GlobalStyle />

      <Filtter
        valorMinimo={inputValorMinimo}
        valorMaximo={inputValorMaximo}
        nomeProduto={inputNomeProduto}
        setMinimo={setInputValorMinimo}
        setMaximo={setInputValorMaximo}
        setNome={setInputNomeProduto}
      />

      <Home
        listaPosts={listaPosts}
        homeOrdernar={homeOrdem}
        homeItensCart={quantidadeItensCart}
        setHomeOrdenar={setHomeOrdem}
      />

      <Cart
        listaDeCompras={listaDeCompras}
        valorTotalDaCompra={valorTotalCompra}
      />
    </ContainerPrincipal>
  );
}

export default App;