import React,{ useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "../CSS/Colaborador.css";

const Colaborador = () => {
  // Gerenciar estado dos campos do formulário
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');

  // Função para verificar se a matrícula já existe no banco de dados
  const checkMatriculaExistente = async (matricula) => {
    const response = await fetch(`http://localhost:5000/usuarios?id=${matricula}`);
    const data = await response.json();
    return data.length > 0; // Se já existir algum usuário com essa matrícula, retorna true
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário
    
    // Validação para garantir que os campos não estão vazios
    if (!nome || !matricula) {
      toast.error('Por favor, preencha todos os campos!');
      return;
    }

    // Verificando se a matrícula já está cadastrada
    const isMatriculaExistente = await checkMatriculaExistente(matricula);
    if (isMatriculaExistente) {
      toast.error('Matrícula já cadastrada!');
      return;
    }

    // Enviando dados para o json-server, utilizando a matrícula como ID
    try {
      const response = await fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: matricula,  // A matrícula será o ID
          nome,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao cadastrar usuário');
      }

      const data = await response.json();
      console.log('Usuário cadastrado com sucesso:', data);

      // Limpar campos após cadastro (opcional)
      setNome('');
      setMatricula('');
      toast.success('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      toast.error('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="Colab">
      <form onSubmit={handleSubmit}>
        <span>Nome</span>
        <input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
        />
        <span>MAT</span>
        <input
          type="number"
          placeholder="Número da matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)} // Atualiza o estado da matrícula
        />
        <button type="submit">Cadastrar!</button>
      </form>

      {/* ToastContainer com botão de fechar removido */}
      <ToastContainer 
        position="bottom-right"
        autoClose={5000} // Fechar automaticamente após 5 segundos
        hideProgressBar={false} // Exibe a barra de progresso
        closeButton={false} // Remove o botão de fechar (X)
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default Colaborador;
