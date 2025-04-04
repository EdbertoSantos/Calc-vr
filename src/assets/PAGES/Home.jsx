import React, { useState } from "react";
//import { toast, ToastContainer } from "react-toastify";
import Escala from "../COMPONENTS/Escala";

import "../CSS/Home.css";

const Home = () => {
  const [selectdMonth, setSelectedMonth] = useState("");

  return (
    <div className="home-container">
      <header>
        <h1>Bem-vindo à Home</h1>
        <p>Aqui ficam as escalas dos postos!</p>
        <div className="home-select-month">
          <p>Selecione o Mês</p>
          <select
            name=""
            id=""
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
      </header>
      {selectdMonth && <Escala />}
    </div>
  );
};

export default Home;
