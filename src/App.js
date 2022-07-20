import { DivCorpo, DivPai } from "./style";
import React, { useState } from "react";
import Filtter from "./Components/Filter/Filtter";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { MockDeDados } from "./MockDeDados";
import Prod from "./Components/Prod/Prod";

function App() {
  const [dadosMockDeDados] = useState(MockDeDados);
  const [homeOrdem, setHomeOrdem] = useState("");
  const [quantidadeItensCart, setQuantidadeItensCart]= useState("");

  return (
    <DivPai>
      <Filtter />
      <DivCorpo>
        <Home 
        homeOrdernar={homeOrdem}
        homeItensCart = {quantidadeItensCart} 
        setHomeOrdenar={setHomeOrdem}
        setHomeIntenscart={setQuantidadeItensCart}
        />
        {dadosMockDeDados
          .sort((x,y)=>{
            switch (homeOrdem){
              case "asc":
                return x.price - y.price
              case "desc":
                return y.price - x.price
              default:
                return MockDeDados
            }           
          })
          .map((dadoMock) => {
            return (
              <Prod
                key={dadoMock.id}
                nameProd={dadoMock.nameProd}
                price={dadoMock.price}
                photo={dadoMock.photo}
              />
            );
          })}
      </DivCorpo>
      <Cart />
    </DivPai>
  );
}

export default App;
