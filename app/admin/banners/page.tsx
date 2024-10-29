'use client'
import { useState } from 'react';

export default function AddBanner() {
  const [banner, setBanner] = useState('');
  const [link, setLink] = useState('');
  const PORT = process.env.PORT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const response = await fetch('http://localhost:3242/api/banners/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ banner, link }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Cardápio adicionado:', data);

      setBanner('');
      setLink('');
    } else {
      console.error('Failed to add funcionario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
      <input
        type="text"
        placeholder="Banner"
        value={banner}
        onChange={(e) => setBanner(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button type="submit" className='flex relative w-[120px] justify-center text-white rounded-[3px] mx-auto p-[3px 5px] bg-iblue'>Adicionar</button>
    </form>
  );
}
