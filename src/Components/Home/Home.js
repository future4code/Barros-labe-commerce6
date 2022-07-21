import React from "react";
import { HomeDiv, Ordem } from "../../style";


function Home(props) {

  function handleSeletorOrden(e) {
    e.preventDefault();
    props.setHomeOrdenar(e.target.value);
  }

  return (
  <div>

      <Ordem>

        <p>Quantidade de Produtos: {props.homeItensCart}</p>      


        <select value={props.homeOrdernar} onChange={handleSeletorOrden}>
          <option value={"asc"}>Crescente</option>
          <option value={"desc"}>Decrescente</option>
        </select>

      </Ordem>

      <HomeDiv>                       
        {props.listaPosts}            
      </HomeDiv>

  </div>     
  );
}

export default Home;
