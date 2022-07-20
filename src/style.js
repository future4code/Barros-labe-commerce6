import styled from "styled-components";


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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
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

export const FiltroDivPricipal= styled.div `
    border: solid 0.2vw black;
    text-align: center;
    height: 100%;
`
export const FormFiltro = styled.form `
    display: flex;
    flex-direction: column;
`
export const CarrinhoDivPrincipal= styled.div `
    border: solid 0.2vw black;
    height: 100%;
    text-align: center;
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
`
export const Ordem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5vw;
    p {
        font-size: 0.9vw;
    }
`
export const ContainerPrincipal= styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`