import React, {useState, useEffect} from "react";
import axios from "axios";

import "../CSS/Escala.css";

const Escala = () => {
  const [postos, setPostos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [error, setError] = useState(null); // Estado para controle de erros

  useEffect(() => {
    const fetchPostos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/postos");
        setPostos(response.data);
        setLoading(false); // Dados carregados, setando loading como false
      } catch (error) {
        setError("Erro ao carregar os postos", error);
        setLoading(false); // Mesmo no erro, podemos parar o loading
      }
    };
    fetchPostos();
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>; // Exibe uma mensagem de carregamento
  }

  if (error) {
    return <div>{error}</div>; // Exibe a mensagem de erro, caso ocorra
  }

  return (
    <section>
      <div>
        {postos.length === 0 ? (
          <p>Não há postos disponíveis.</p>
        ) : (
          <ul>
            {postos.map((posto) => (
              <li key={posto.id}>
                <h3>{posto.nomePosto}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Escala;
