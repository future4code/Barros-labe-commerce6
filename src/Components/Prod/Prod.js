import React from "react";
import { PostContainer, PostPhoto } from "./style";
import InputMask from "react-input-mask";

function Prod(props) {
 
  return (
    <PostContainer>
      <PostPhoto src={props.photo} alt="Imagem Produto" />
      <label>{props.nameProd}</label>
      <div>
      <label>R$</label><label>{props.price}</label>
      </div>
      <button /* onClick={handleBotaoCart} */>Adicionar ao carrinho</button>
    </PostContainer>
  );
}

export default Prod;
