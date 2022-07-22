import React from "react";
import { CarrinhoDivPrincipal, Lista } from "../../style";
import iconeFiltro from "../../img/ico_disco.png";  //samuel

const Cart= (props) => {

  return(
    <CarrinhoDivPrincipal>
      <img src={iconeFiltro} alt="icone planeta" height={50} width={50} />  
      <h1>Carrinho</h1>
      {props.listaDeCompras}
      <p>Valor Total:</p>
      <label>R${props.valorTotalDaCompra},00</label>
    </CarrinhoDivPrincipal>
  );
};

export default Cart;

