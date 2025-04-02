import React from "react";
import { Link } from "react-router-dom"; // Importando Link

import "../CSS/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://neseg.com.br/wp-content/uploads/2020/12/cropped-logo-topo.png" alt="Logo NE" className="logo-Nav-Bar"/>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> {/* Link para Home */}
        <li><Link to="/Cadastro ">Cadastro</Link></li> {/* Link para Home */}
      </ul>
    </nav>
  );
};

export default Navbar;
