'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Banners() {
    const images = [
        "/imagens/banners/1.png",
        "/imagens/banners/2.png",
        "/imagens/banners/3.png",
        "/imagens/banners/4.png",
        "/imagens/banners/5.png",
        "/imagens/banners/6.png",
        ];
    const [currentImage, setCurrentImage] = useState(0);

    // Função para avançar para a próxima imagem
    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    // Função para voltar para a imagem anterior
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  
    // Automatizar a troca de imagem a cada 3 segundos
    useEffect(() => {
      const interval = setInterval(nextImage, 3000);
      return () => clearInterval(interval);  // Limpa o intervalo quando o componente for desmontado
    }, []);

  return(
    <div className="relative w-full sm:h-[200px] md:h-[400px] bg-gray-300 py-[150px] mt-[120px]">
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Imagem do Slide */}
      <img 
        src={images[currentImage]} 
        alt={`Slide ${currentImage}`} 
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Controles do Slide */}
    <button 
      onClick={prevImage} 
      className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2 bg-black opacity-50 hover:opacity-75"
    >
      &#10094;
    </button>
    <button 
      onClick={nextImage} 
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2 bg-black opacity-50 hover:opacity-75"
    >
      &#10095;
    </button>
  </div>
  )

}