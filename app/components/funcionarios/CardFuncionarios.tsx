"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
type Funcionario = {
    nome:string,
    cargo:string,
    area?:string,
    imagem:string,
}

const CardFuncionarios = () => {
  const [data, setData] = useState<Funcionario[]>([]);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('https://infopoint-sigma.vercel.app/api/funcionario');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.data);
    } catch (err:any) {  
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount

    const interval = setInterval(() => {
      fetchData(); // Re-fetch data every 10 seconds
    }, 10000); // 10000 ms = 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
    
      {data.map((f, index) => (
    <div className='flex flex-col sm:w-[100px] md:w-[180px] h-[auto]' key={index}>
        <div className="flex relative w-[80%] h-[auto] rounded-[3px] cursor-pointer">  
        <img
        src={f.imagem}
        alt={f.nome}
        className="w-full h-full object-cover rounded-md"

        />
        </div>
        <p className='text-base font-bold'>{f.nome}</p>
        <p className='text-xs'>{f.cargo}</p>
        </div>
      ))}</>
    ) 
}

export default CardFuncionarios
