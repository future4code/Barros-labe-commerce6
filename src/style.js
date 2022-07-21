import styled from "styled-components";
import background from "./img/fundo.gif"

export const ContainerPrincipal= styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-image:url(${background});
    background-size: cover;
    color: aliceblue    ;
    height: 110vh;
`

/* export const AsideInputs=styled.aside`
  display: flex;
  flex-direction: column;
  border: solid 3px;
  width: 300px;
  height: 100vh;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;

`
export const TituloAside=styled.h2`

` */

export const HomeDiv= styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    `

export const DivPost=styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 
`

/* export const FormDoAside=styled.form`

`
export const InputsDaPagina=styled.input`

`
export const OrdenarProduto=styled.select`

` */
export const Lista=styled.div`
    margin:1vw 0 1vw 1vw  ;
    display: grid;
    
    `

export const FiltroDivPricipal= styled.div `
    border: solid 0.2vw aliceblue;
    text-align: center;
    height: 90%;
    padding: 1vw;
    margin: 1vw;
    
`
//FILTROS
export const FormFiltro = styled.form `
    display: flex;
    flex-direction: column;
     margin-top: 1vw;
     font-size: large;
     input{
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;
      }
           
`
//CARRINHO
export const CarrinhoDivPrincipal= styled.div `
     border: solid 0.2vw aliceblue;
    text-align: center;
    height: 90%;                                               
    padding: 1vw;
    margin: 1vw;
    font-size: large;
`
export const CompraCarrinho = styled.div`
    display: flex;
    justify-content: space-around;
    
`
export const CardPost = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.8vw;
    h3 {
        margin: 0.3vw 0;
    }
    p {
        margin: 0 0 0.7vw 0;
    }
    button {
        background-color: greenyellow;
        border-radius: 5px;
        font-size: large;
    }
    button:hover {
        background-color: green;
    }
`
export const Ordem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5vw;
    p {
        font-size: 0.9vw;
    }
`

export const DivFooter=styled.div`
    display: flex;
    width: 100;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: greenyellow;

`
