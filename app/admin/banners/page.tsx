'use client'
import { useState } from 'react';

export default function AddBanner() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const PORT = process.env.PORT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const response = await fetch('https://infopoint-sigma.vercel.app/api/banners/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, imagem }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Cardápio adicionado:', data);

      setBanner('');
      setImagem('');
    } else {
      console.error('Failed to add funcionario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
      <input
        type="text"
        placeholder="Banner"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        required
      />
      <button type="submit" className='flex relative w-[120px] justify-center text-white rounded-[3px] mx-auto p-[3px 5px] bg-iblue'>Adicionar</button>
    </form>
  );
}
