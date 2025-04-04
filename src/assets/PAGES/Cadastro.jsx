// src/pages/Home.jsx
import React, { useState } from "react";
import Colaborador from "../COMPONENTS/Colaborador";
import Posto from "../COMPONENTS/Posto"

import "../CSS/Cadastro.css";

const Cadastro = () => {
  const [selectedForm, setSelectedForm] = useState("");

  return (
      <div className="Cadastro">
        <select
          name="formSelect"
          id="formSelect"
          onChange={(e) => setSelectedForm(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Posto">Posto</option>
          <option value="Colaborador">Colaborador</option>
        </select>

        {selectedForm === "Colaborador" && <Colaborador />}
        {selectedForm === "Posto" && <Posto />}
      </div>
  );
};

export default Cadastro;
