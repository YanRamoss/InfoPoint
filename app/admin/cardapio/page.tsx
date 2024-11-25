'use client'
import { useState } from 'react';

export default function AddCardapio() {
  const [prato, setPrato] = useState('');
  const PORT = process.env.PORT;
  const [data, setData] = useState('Segunda-feira');

  const options = [
    { value: 'Segunda-feira', label: 'Segunda-feira' },
    { value: 'Terça-feira', label: 'Terça-feira' },
    { value: 'Quarta-feira', label: 'Quarta-feira' },
    { value: 'Quinta-feira', label: 'Quinta-feira' },
    { value: 'Sexta-feira', label: 'Sexta-feira' },
  ];
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const response = await fetch('https://infopoint-sigma.vercel.app/api/cardapio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prato, data }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Cardápio adicionado:', data);

      setPrato('');
      setData('');
    } else {
      console.error('Failed to add funcionario');
    }
  };

  return (
    <>
    
    <h2 className='t text-center font-medium my-[20px]'>Adicionar Cardápio</h2>
    <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] t items-center'>
      <input
        type="text"
        placeholder="Prato"
        value={prato}
        onChange={(e) => setPrato(e.target.value)}
        required
      />
      
      <select
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="block w-[220px] max-w-xs px-4 py-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button type="submit" className='flex relative w-[120px] justify-center text-white rounded-[3px] mx-auto p-[3px 5px] bg-iblue'>Adicionar</button>
    </form></>
  );
}
