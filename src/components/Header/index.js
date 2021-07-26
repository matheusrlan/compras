import React from "react";
import { Link } from "react-router-dom";
import {HeaderContainer} from "./style";

const Header = () =>{
  return(
    <HeaderContainer>
      <nav>
        <Link to="/"> 
           Página Inicial
        </Link>
        <Link to="/produtos">
           Produtos
        </Link>
        <Link to="/clientes">
           Clientes
        </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;