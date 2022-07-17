import "./App.css";
import { DivPai } from "./style";
import React from "react";
import Filtter from "./Components/Filter/Filtter";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";


function App() {
  
  return (
    
      <DivPai>
        <Filtter/>
        <Home/>
        <Cart/>
      </DivPai>
    
  );
}

export default App;
