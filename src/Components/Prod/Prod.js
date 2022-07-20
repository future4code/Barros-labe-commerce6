import React from "react";
import { PostContainer, PostFooter, PostHeader, PostPhoto } from "./style";


function Prod(props) {
 
  return (
    <PostContainer>
      <PostPhoto src={props.photo} alt="Imagem Produto" />
      <PostHeader>
      <label>{props.nameProd}</label>
      <div>
      <label>R$</label><label>{props.price}</label>
      </div>
      </PostHeader>
      <PostFooter>
      <button /* onClick={handleBotaoCart} */>Adicionar ao carrinho</button>
      </PostFooter>
    </PostContainer>
  );
}

export default Prod;