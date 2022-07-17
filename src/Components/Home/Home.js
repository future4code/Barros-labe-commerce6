import React, { useState } from "react";
import { mockComponent } from "react-dom/test-utils";
import { MockDeDados } from "../../MockDeDados";
import {
  DivCorpo,
  DivInputCorpo,
  DivPost,
  LabelDosInputs,
  OrdenarProduto,
} from "../../style";
import Prod from "../Prod/Prod";

function Home() {
  const [dadosMockDeDados, setDadosMockDeDados] = useState(MockDeDados);
  const [ordenDosProdutos, setOrdenDosProdutos] = useState("1"); 

  const listaPosts = dadosMockDeDados.map((post, indexe) => {
    return (
      <Prod
        key={indexe}
        nameProd={post.nameProd}
        price={post.price}
        photo={post.photo}
      />
    );
  });

  /* const listaCrescenteDecrescente = listaPosts.map((minimo, indexe) => {
    minimo.price
    return()
      
  }); */
  /* const listaCrescenteDecrescente = listaPosts.filter((minimo, indexe) => {
    return(minimo.price <= ordenDosProdutos)
      
  }); */
  function crescente() {
    return dadosMockDeDados.sort(function (x, y) {
      return x.price - y.price;
    });
  }

  function decrescente() {
    return dadosMockDeDados.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  function handleSeletorOrden(e) {
    e.preventDefault()
    setOrdenDosProdutos(e.target.value)
  }

  const qualOrdenacao = () => {
    console.log(ordenDosProdutos);
    if (ordenDosProdutos === "2") {
        
      crescente();
    } else if (ordenDosProdutos === "1") {
      
      decrescente();
    } else{
        setDadosMockDeDados(MockDeDados)
    }
  };

  return (
    <DivCorpo>
      <DivInputCorpo onChange={qualOrdenacao}>
        <LabelDosInputs>Quantidade de Produtos:</LabelDosInputs>
        <LabelDosInputs>
          Ordenação:
          <OrdenarProduto onChange={handleSeletorOrden}>
            <option></option>
            <option value="1">Crescente</option>
            <option value="2">Decrescente</option>
          </OrdenarProduto>
        </LabelDosInputs>
      </DivInputCorpo>
      <DivPost>{listaPosts}</DivPost>
    </DivCorpo>
  );
}

export default Home;