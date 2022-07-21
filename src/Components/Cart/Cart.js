import React from "react";
import { CarrinhoDivPrincipal, Lista } from "../../style";
import iconeFiltro from "../../img/ico_disco.png";  //samuel



const Cart= (props) => {

  return(
    <CarrinhoDivPrincipal>
      <img src={iconeFiltro} alt="icone planeta" height={50} width={50} />  
      <h1>Carrinho</h1>
        <ul>
        {props.listaDeCompras}
        </ul>
      <h3>Valor Total:</h3>
    </CarrinhoDivPrincipal>
)
}

export default Cart;