import React, { useEffect, useState } from "react";
import { ContainerPrincipal, CompraCarrinho, CardPost } from "./style";
import Filtter from "./Components/Filter/Filtter";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { MockDeDados } from "./MockDeDados";
/* import Prod from "./Components/Prod/Prod"; */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;
 
function App() {
  const [dadosMockDeDados] = useState(MockDeDados);
  const [homeOrdem, setHomeOrdem] = useState("asc");
<<<<<<< HEAD
  const [quantidadeItensCart, setQuantidadeItensCart]= useState("");
  const [inputValorMinimo, setInputValorMinimo] = useState(-Infinity)
  const [inputValorMaximo, setInputValorMaximo] = useState(Infinity)
  const [inputNomeProduto, setInputNomeProduto] = useState("")
  const [compras, setCompras] = useState([])  
<<<<<<< HEAD


=======
  const [valorTotalCompra,setValorTotalCompra] = useState(0)

  
>>>>>>> 3df10418eea93350dfeaf75603a81660a2d866b9
  const posts = dadosMockDeDados
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
<<<<<<< HEAD
      default:
        return y.price - x.price
    }
  })

  const listaPosts = posts.map((dadoMock, index)=>{
    return <CardPost key={index}>
    <img src={dadoMock.photo} alt="Imagem do produto"></img>
    <h3>{dadoMock.nameProd}</h3>
    <p>R${dadoMock.price},00</p>
    <button onClick={()=>{adicionarProduto(index, dadoMock)}}>Adicionar ao carrinho</button>
    </CardPost>
  })

  const adicionarProduto = (index, dadoMock) => {   
    const listaCompras = [...compras, {id: index, nameProd: dadoMock.nameProd, price: dadoMock.price, photo: dadoMock.photo}]
    setCompras(listaCompras)
  }

  const remover = (indexRemover) => {
    const listaAtualizada = listaDeCompras.filter((compra, index)=>{
      return index !== indexRemover
    })
    setCompras(listaAtualizada)
  }

  const listaDeCompras = compras.map((post, index)=>{
    return <CompraCarrinho key={index}><p>{post.nameProd}</p> <button onClick={()=>{remover(index)}}>Remover</button></CompraCarrinho>
  })



  return (

  <ContainerPrincipal>

  <GlobalStyle/>

  <Filtter 
    valorMinimo={inputValorMinimo}
    valorMaximo={inputValorMaximo}
    nomeProduto={inputNomeProduto}
    setMinimo={setInputValorMinimo}
    setMaximo={setInputValorMaximo}
    setNome={setInputNomeProduto} />
      
  <Home
    listaPosts={listaPosts}
    homeOrdernar={homeOrdem}
    homeItensCart = {quantidadeItensCart} 
    setHomeOrdenar={setHomeOrdem}
    setHomeIntenscart={setQuantidadeItensCart}/>

=======
=======
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
    .filter((dadoMock) => {
      return dadoMock.price >= inputValorMinimo || inputValorMinimo === "";
    })
    .filter((dadoMock) => {
      return dadoMock.price <= inputValorMaximo || inputValorMaximo === "";
    })
    .sort((x, y) => {
      switch (homeOrdem) {
        case "asc":
          return x.price - y.price;
>>>>>>> be396d5fda02a7ed932d4669116fd770985cd91e
        default:
          return y.price - x.price;
      }
    });

  function quantidadeDeItenCart() {
    const valor = posts.length;
    return valor;
  }

  useEffect(() => {
    setQuantidadeItensCart(quantidadeDeItenCart());
  }, [posts]);

  useEffect(() => {
    setValorTotalCompra(totalCompra());
  }, [compras]);

  const listaPosts = posts.map((dadoMock, index) => {
    return (
      <CardPost key={index}>
        <img src={dadoMock.photo} alt="Imagem do produto"></img>
        <h3>{dadoMock.nameProd}</h3>
        <p>R${dadoMock.price},00</p>
        <button
          onClick={() => {
            adicionarProduto(index, dadoMock);
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

  const adicionarProduto = (index, dadoMock) => {
    const listaCompras = [
      ...compras,
      {
        id: index,
        nameProd: dadoMock.nameProd,
        price: dadoMock.price,
        photo: dadoMock.photo,
      },
    ];
    setCompras(listaCompras);
  };

  const remover = (indexRemover) => {
    const listaAtualizada = compras.filter((compra, index) => {
      return compra.id !== indexRemover;
    });
    setCompras(listaAtualizada);
  };

  const listaDeCompras = compras.map((post, index) => {
    return (
      <CompraCarrinho key={index}>
        <p>{post.nameProd}</p>{" "}
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

<<<<<<< HEAD
  <GlobalStyle/>
>>>>>>> 3df10418eea93350dfeaf75603a81660a2d866b9
=======
      <Home
        listaPosts={listaPosts}
        homeOrdernar={homeOrdem}
        homeItensCart={quantidadeItensCart}
        setHomeOrdenar={setHomeOrdem}
      />
>>>>>>> be396d5fda02a7ed932d4669116fd770985cd91e

      {/* {dadosMockDeDados
        .sort((x,y)=>{
          switch (homeOrdem){
            case "asc":
              return x.price - y.price
            default:
              return y.price - x.price
          }           
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
        .map((dadoMock, index) => {
          return (
            <CardPost key={index}>
              <img src={dadoMock.photo} alt="Imagem do produto"></img>
              <h3>{dadoMock.nameProd}</h3>
              <p>R${dadoMock.price},00</p>
              <button onClick={()=>{adicionarProduto(index, dadoMock)}}>Adicionar ao carrinho</button>
            </CardPost>
          );
        })} */}
<<<<<<< HEAD
    
<<<<<<< HEAD
  <Cart listaDeCompras={listaDeCompras}/>
=======
  <Cart 
  listaDeCompras={listaDeCompras}
  valorTotalDaCompra={valorTotalCompra}
  
  />
>>>>>>> 3df10418eea93350dfeaf75603a81660a2d866b9
=======
>>>>>>> be396d5fda02a7ed932d4669116fd770985cd91e

      <Cart
        listaDeCompras={listaDeCompras}
        valorTotalDaCompra={valorTotalCompra}
      />
    </ContainerPrincipal>
  );
}

export default App;
