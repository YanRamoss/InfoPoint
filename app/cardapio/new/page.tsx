'use client'
import React, { useState, FormEvent } from 'react';

const NovoFuncionario = () => {
  const [nome, setPrato] = useState('');
  const [cargo, setData] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ nome, cargo});
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
            onChange={(e) => setPrato(e.target.value)}
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
            onChange={(e) => setData(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="submit"
          value="Novo Cardápio"
          className="w-full bg-blue-600 text-black font-bold py-2 rounded-md hover:bg-blue-500"
        />
      </form>
    </div>
  );
};

export default NovoFuncionario;