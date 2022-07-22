import React from "react";
import { HomeDiv, Ordem, DivHeader, DivFooter  } from "../../style";
import logo from "../../img/logo.png"; 

function Home(props) {

  function handleSeletorOrden(e) {
    e.preventDefault();
    props.setHomeOrdenar(e.target.value);
  }

  return (
    <div>
      <DivHeader>
        <img src={logo} alt="Logo Mundo da lua" height={120} width={120} />  
        <p>MUNDO DA LUA</p>
      </DivHeader>

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
      <DivFooter>                                                          
        <span>© 2022 Munda da Lua. Todos os direitos reservados</span>    
      </DivFooter>
    </div>
  );
}

export default Home;
