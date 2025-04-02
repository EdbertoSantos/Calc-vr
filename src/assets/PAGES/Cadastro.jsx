// src/pages/Home.jsx
import React, { useState } from "react";
import Colaborador from "../COMPONENTS/Colaborador";

import "../CSS/Cadastro.css";

const Cadastro = () => {
  const [selectedForm, setSelectedForm] = useState("");

  return (
    <div className="Cadastro">
      <h1>Bem-vindo à Cadastro</h1>
      <h2>Escolha o Formulário</h2>
      <select name="formSelect" id="formSelect" onChange={(e) => setSelectedForm(e.target.value)}>
        <option value="">Selecione...</option>
        <option value="Posto">Posto</option>
        <option value="Colaborador">Colaborador</option>
      </select>
      
      {selectedForm === "Colaborador" && <Colaborador />}
    </div>
  );
};

export default Cadastro;
