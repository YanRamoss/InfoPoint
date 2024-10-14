'use client'
import React, { useState, FormEvent } from 'react';

const NovoFuncionario = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ nome, cargo, imagem });
  };

  return(
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Novo Funcionário</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">
            Cargo
          </label>
          <input
            type="text"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="imagem" className="block text-sm font-medium text-gray-700">
            Imagem URL
          </label>
          <input
            type="url"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <input
          type="submit"
          value="Novo Funcionário"
          className="w-full bg-blue-600 text-black font-bold py-2 rounded-md hover:bg-blue-500"
        />
      </form>
    </div>
  );
};

export default NovoFuncionario;