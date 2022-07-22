import React from "react";
import { FiltroDivPricipal, FormFiltro } from "../../style";
import iconeFiltro from "../../img/ico_satelite.png";  //samuel

const Filtter= ({valorMinimo, valorMaximo, nomeProduto, setNome, setMinimo, setMaximo}) => {

  return(
  <FiltroDivPricipal>
     <img src={iconeFiltro} alt="icone planeta" height={50} width={50} />  
    <h1>Filtros</h1>
    <FormFiltro>
      <label>Valor Minímo</label>          
      <input type="number" value={valorMinimo} onChange={(e)=>setMinimo(e.target.value)} placeholder="Valor Minímo"></input>
      <label>Valor Máximo</label> 
      <input type="number" value={valorMaximo} onChange={(e)=>setMaximo(e.target.value)} placeholder="Valor Máximo"></input>
      <label>Nome do Produto</label> 
      <input type="text" value={nomeProduto} onChange={(e)=>setNome(e.target.value)} placeholder="Nome do Produto"></input>
    </FormFiltro>          
  </FiltroDivPricipal>
    )
}

export default Filtter;