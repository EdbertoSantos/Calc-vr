import React from "react";
import { Link } from "react-router-dom"; // Importando Link

import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <header>
        <ul>
          <img src="https://neseg.com.br/wp-content/uploads/2020/12/cropped-logo-topo.png"alt=""className="Nav-img"/>
          <li><Link to="/" className="Nav-div-link">Início</Link></li>
          <li><Link to="/Cadastro" className="Nav-div-link">Dados</Link></li>
          <li><Link to="/Relatorio" className="Nav-div-link">Relatorio</Link></li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
