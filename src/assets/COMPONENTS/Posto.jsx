import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importando o CSS necessário
import "../CSS/Posto.css";

const Posto = () => {
  const [Posto, setPosto] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Vr, setVr] = useState('');

  // Função para verificar se o posto já existe
  const checkPostoExistente = async (postoNome) => {
    const response = await fetch(`http://localhost:5000/postos?nomePosto=${postoNome}`);
    const data = await response.json();
    return data.length > 0; // Se já existir algum posto com esse nome, retorna true
  };

  // Função de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

    // Validação para garantir que todos os campos estão preenchidos
    if (!Posto || !Endereco || !Vr) {
      toast.error('Por favor, preencha todos os campos!');
      return;
    }

    // Verificar se já existe um posto com o mesmo nome
    const postoExistente = await checkPostoExistente(Posto);
    if (postoExistente) {
      toast.error('Já existe um posto com esse nome!');
      return;
    }

    // Simulação de envio para o banco de dados (JSON Server ou outro)
    try {
      const response = await fetch('http://localhost:5000/postos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomePosto: Posto,  // Nome do posto
          endereco: Endereco, // Endereço do posto
          tipoVr: Vr, // Tipo de VR (Final de Semana ou Todos os Dias)
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar posto');
      }

      // Sucesso
      toast.success('Posto cadastrado com sucesso!');
      
      // Limpar os campos após cadastro (opcional)
      setPosto('');
      setEndereco('');
      setVr('');

    } catch (error) {
      toast.error('Ocorreu um erro. Tente novamente mais tarde.');
      console.error('Erro ao cadastrar posto:', error);
    }
  };

  return (
    <div className="Posto">
      <form onSubmit={handleSubmit}>
        <span>Nome do posto</span>
        <input
          type="text"
          placeholder="Nome do posto"
          value={Posto}
          onChange={(e) => setPosto(e.target.value)} 
        />
        <span>Endereço</span>
        <input
          type="text"
          placeholder="Endereço do Posto"
          value={Endereco}
          onChange={(e) => setEndereco(e.target.value)} 
        />
        <span>Tipo de VR</span>
        <select
          value={Vr}
          onChange={(e) => setVr(e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="FDS">Final de Semana</option>
          <option value="ALL">Todos os Dias</option>
        </select>
        <button type="submit">Cadastrar!</button>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeButton={false}
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default Posto;