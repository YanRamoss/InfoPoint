'use client'
import { useState } from 'react';

export default function AddFuncionario() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [area, setArea] = useState('');
  const [imagem, setImagem] = useState('');
  const PORT = process.env.PORT;

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
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
      <input
        type="text"
        placeholder="Nome"
        className='w-[180px]'
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cargo"
        className='w-[180px]'
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Area"
        className='w-[180px]'
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem"
        className='w-[180px]'
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        required
      />
      <button type="submit" className='flex relative w-[120px] justify-center text-white rounded-[3px] mx-auto p-[3px 5px] bg-iblue'>Adicionar</button>
    </form>
  );
}
