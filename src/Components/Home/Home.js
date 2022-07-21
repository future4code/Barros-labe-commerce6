import React from "react";
import { DivFooter, HomeDiv, Ordem } from "../../style";


function Home(props) {

  function handleSeletorOrden(e) {
    e.preventDefault();
    props.setHomeOrdenar(e.target.value);
  }

  return (
  <div>

      <Ordem>

        <p>Quantidade de Produtos: {props.listaPosts.length}</p>      

        <select value={props.homeOrdernar} onChange={handleSeletorOrden}>
          <option value={"asc"}>Crescente</option>
          <option value={"desc"}>Decrescente</option>
        </select>

      </Ordem>

      <HomeDiv>                       
        {props.listaPosts}
      </HomeDiv>
      <DivFooter>
      <span>© 2022 Munda da Lua. Todos os direitos reservados</span>    
      </DivFooter>
  </div>     
  );
}

export default Home;
