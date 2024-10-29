'use client'
import { useState } from 'react';

export default function AddCardapio() {
  const [prato, setPrato] = useState('');
  const [datap, setDatap] = useState('');
  const PORT = process.env.PORT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const response = await fetch('https://infopoint-sigma.vercel.app/api/cardapio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prato, datap }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Cardápio adicionado:', data);

      setPrato('');
      setDatap('');
    } else {
      console.error('Failed to add funcionario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
      <input
        type="text"
        placeholder="Prato"
        value={prato}
        onChange={(e) => setPrato(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Data"
        value={datap}
        onChange={(e) => setDatap(e.target.value)}
        required
      />
      <button type="submit" className='flex relative w-[120px] justify-center text-white rounded-[3px] mx-auto p-[3px 5px] bg-iblue'>Adicionar</button>
    </form>
  );
}
