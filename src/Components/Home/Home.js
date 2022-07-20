import React from "react";
import { DivInputCorpo, InputsDaPagina, LabelDosInputs, OrdenarProduto } from "../../style";

function Home(props) {
  function handleSeletorOrden(e) {
    e.preventDefault();
    props.setHomeOrdenar(e.target.value);
  }

  return (
    <DivInputCorpo>
      <LabelDosInputs>
        Quantidade de Produtos:
        <InputsDaPagina/>
        </LabelDosInputs>
      <LabelDosInputs>
        Ordenação:
        <OrdenarProduto value={props.homeOrdernar} onChange={handleSeletorOrden}>
          <option ></option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </OrdenarProduto>
      </LabelDosInputs>
    </DivInputCorpo>
  );
}

export default Home;
