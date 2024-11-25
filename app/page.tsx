import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home(){
  const banners = [
    "./imagens/banners/1.png",
    "./imagens/banners/2.png",
    "./imagens/banners/3.png",
    "./imagens/banners/4.png",
    "./imagens/banners/5.png",
    "./imagens/banners/6.png",
    ];
  const [currentImage, setCurrentImage] = useState(0);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % banners.length);
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Automatizar a troca de imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
      {/* Banner de Slides */}
      <div className="relative w-full h-[500px] bg-gray-300">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
          {/* Imagem do Slide */}
          <Image 
            src={banners[currentImage]} 
            alt={`Slide ${currentImage}`} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-md"
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
        <h1 className="flex items-center justify-center bg-[url('/imagens/pages/home-banner.jpg')] bg-cover bg-center h-[220px] text-[25px] py-[30px]">
          <div className="title">Quem Somos</div>
        </h1> 
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto mt-10 gap-[30px] justify-center" >
        <div className="flex w-[80%] h-[500px] bg-[url('/imagens/cursos/etec.jpg')] bg-cover bg-center rounded-[3px]">

        </div>
        <div className="flex flex-col w-[80%] text-[20px] gap-[20px] bg-iblue p-[20px] text-white">
          <p className='text-justify'>
            Nós somos alunos da ETEC Rio Grande da Serra do 3° ano de Desenvolvimento de Sistemas e estamos desenvolvendo uma empresa durante as aulas de TCC (trabalho de conclusão de cursos).
          </p>
          <p className='text-justify'>
            Nosso projeto inclui um totem de informações interativo para otimizar a divulgação de informações sobre a unidade escolar, proporcionando uma experiência de comunicação eficiente e acessível para alunos, pais, professores e comunidade, promovendo assim o engajamento e o fortalecimento dos laços entre a escola e seu público-alvo. 
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mt-[80px] mx-auto gap-[30px] text-black">
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Missão</h2>
          <p className='text-[17px]'>Nossa missão é transformar a rotina e vida escolar dos alunos e docentes, tornando ela mais pratica e simples em questão da transmissão de informações, fazendo com que todo frequentador do âmbito escolar tenha melhor experiência acadêmica.</p>
        </div>
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Visão</h2>
          <p className='text-[17px]'>Unir a comunidade e mudar a forma padrão de transmitir a informação escolar através da tecnologia, promovendo um espaço onde a comunicação seja transparente, ágil e acessível para todos, além da expansão do projeto a longo prazo.</p>
        </div>
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Valores</h2>
          <ul className='text-[17px]'>
          <li>Transparência; Trabalhamos de forma honesta, mostrando todos nossos objetivos e sendo fiel ao nosso público;</li>
          <li>Acessibilidade; é um sistema acessível, pois está localizado dentro da escola, disponível para os que frequentam esse ambiente;</li>
          <li>Ética; trabalhamos de forma ética, guardando todas as informações passadas a nós;</li>
          <li>Responsabilidade social; Como é um projeto que envolve público, foi tudo pensado para que seja uma experiência única para cada um;</li>
          <li>Simplicidade chamativa e inovadora para que todos consigam utilizar o totem da melhor forma, tendo uma boa experiência;</li>
        </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className='text-[25px] text-center my-[30px]'>Nosso Time</h1>
        <div className="flex flex-row flex-wrap gap-[30px] justify-center">
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Yan.jpg')] bg-cover bg-center">
              <div className=''>Yan Ramos</div>
          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Nicole.jpg')] bg-cover bg-center">
              <div className=''>Nicole Tenório</div>
          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Ana.jpg')] bg-cover bg-center">
              <div className=''>Ana Luisa</div>
          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Sofia.jpg')] bg-cover bg-center">
              <div className=''>Sofia Araujo</div>
          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Duda.jpg')] bg-cover bg-center">
              <div className=''>Maria Eduarda</div>
          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Willian.jpg')] bg-cover bg-center">
              <div className=''>Willian Freire</div>
          </div>
        </div>
      </div>
    </div>
  );
}
