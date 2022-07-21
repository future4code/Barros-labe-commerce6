import React from "react";
import { CarrinhoDivPrincipal } from "../../style";

const Cart = (props) => {

  
  return (
    <CarrinhoDivPrincipal>
      <h1>Carrinho</h1>

      {props.listaDeCompras}

      <p>Valor Total:</p>
      <label>R${props.valorTotalDaCompra},00</label>
    </CarrinhoDivPrincipal>
  );
};

export default Cart;

