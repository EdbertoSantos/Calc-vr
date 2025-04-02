import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/COMPONENTS/Navbar"; // Componente Navbar
import Home from "./assets/PAGES/Home"; // Página Home
import Cadastro from "./assets/PAGES/Cadastro";

function App() {
  return (
    <Router> {/* Envolva a aplicação com Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página Home */}
        <Route path="/Cadastro" element={<Cadastro />} /> {/* Página Home */}
      </Routes>
    </Router>
  );
}

export default App;
