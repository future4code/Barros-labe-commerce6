import styled from "styled-components";
import background from "./img/fundo.gif"

// // STYLE 21/07 19:00H

///////////////////////////////////////////////////////////////////////////CONTAINER///////////////////////////////////////////////////
export const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-image:url(${background});
    background-size: cover;
    color: aliceblue    ;
    height: 110vh;
`
///////////////////////////////////////////////////////////////////////////DIV PRINCIPAL////////////////////////////////////////////////
export const HomeDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 85vh;
`
////////////////////////////////////////////////////////////////////////////DIV FILTROS/////////////////////////////////////////////////
export const FiltroDivPricipal = styled.div`
    border: solid 0.2vw aliceblue;
    text-align: center;
    height: 93%;                                                          
    padding: 1vw;
    margin: 1vw;
`
///////////////////////////////////////////////////////////////////////////////FILTROS///////////////////////////////////////////////////
export const FormFiltro = styled.form`
    display: flex;                                                         
    flex-direction: column;
    margin-top: 1vw;
    input{
        margin: 0.5vw;
        font-size: large;
    }
`
//////////////////////////////////////////////////////////////////////////////DIV CARRINHO///////////////////////////////////////////////
export const CarrinhoDivPrincipal = styled.div`
    border: solid 0.2vw aliceblue;
    text-align: center;
    height: 93%;                                                           
    padding: 1vw;
    margin: 0.8vw;
`
////////////////////////////////////////////////////////////////////////////LISTA DO CARRINHO/////////////////////////////////////////////
export const CompraCarrinho = styled.div`
    display: flex;
    justify-content: space-around;                                         
    padding: 0.5VW;
    justify-items: left;
`
//////////////////////////////////////////////////////////////////////////////////CARDS///////////////////////////////////////////////////
export const CardPost = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.5vw;
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
/////////////////////////////////////////////////////////////////////////////////ORDENAÇÃO///////////////////////////////////////////////////
export const Ordem = styled.div`
    display: flex;
    justify-content: space-between;                                           
    padding: 0.5vw;
    margin-top: 0.5vw;
    p {
        font-size: 0.9vw;
    }
`
////////////////////////////////////////////////////////////////////////////////////HEADER///////////////////////////////////////////////////
export const DivHeader = styled.div`
    display: flex;
    width: 100%;
    height: 5vw;
    margin-top: 1vw;                                                            
    align-items: center;
    justify-content: center;
    color: greenyellow;
    background:linear-gradient(black,#395B64,#A5C9CA) ;
    font-size: xxx-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 0.8;
`
//////////////////////////////////////////////////////////////////////////////////FOOTER/////////////////////////////////////////////////////
export const DivFooter = styled.div`
    display: flex;
    width: 100%;
    height: 2vw;
    align-items: center;                                                        
    justify-content: center;
    background:linear-gradient(black,#395B64,#A5C9CA) ;
    opacity: 0.8;
    color: greenyellow;
`