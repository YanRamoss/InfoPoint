'use client'
import { useState } from 'react';

export default function AddFuncionario() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [area, setArea] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  const response = await fetch('https://infopoint-sigma.vercel.app/api/funcionario/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, cargo, area, imagem }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Funcionario added:', data);

      setNome('');
      setCargo('');
      setArea('');
      setImagem('');
    } else {
      console.error('Failed to add funcionario');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        required
      />
      <button type="submit">Add Funcionario</button>
    </form>
  );
}