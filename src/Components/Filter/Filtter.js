import React from "react";
import { AsideInputs, InputsDaPagina, LabelDosInputs, TituloAside } from "../../style";


function Filtter() {

    

    return(
        <AsideInputs>
          <TituloAside>Filtros</TituloAside>
          <LabelDosInputs>Valor mínimo:</LabelDosInputs>
          <InputsDaPagina type="text" /* onChange={(e)=>setFiltroValorMinimo(e.target.value)}  *//>
          <LabelDosInputs>Valor máximo:</LabelDosInputs>
          <InputsDaPagina type="text" /*value={} onChange={} *//>
          <LabelDosInputs>Busca por nome:</LabelDosInputs>
          <InputsDaPagina type="text" /*value={} onChange={} *//>
        </AsideInputs>
    )
    
}


export default Filtter;