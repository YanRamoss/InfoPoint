// import HomeBanner from '@/public/home-banner.jpg'
import Carousel from "../components/carrossel/Carousel";
const images = [
  "./Yan.jpg",
  "./Ana.jpg",
  "./Duda.jpg",
  "./Nicole.jpg",
  "./Sofia.jpg",
  "./Willian.jpg"
  ];
export default function Home() { 
  return (
    <div className="container mx-auto">
        <h1 className="flex items-center justify-center bg-[url('/images/pages/home-banner.jpg')] bg-cover bg-center h-[220px] text-[25px] py-[30px]">
        Quem Somos
        </h1> 
      <div className="flex flex-row w-[90%] mx-auto mt-10 gap-[30px] justify-center" >
        <div className="flex w-[80%] h-[500px] bg-[url('/images/cursos/imagenETEC.jpg')] bg-cover bg-center rounded-[3px]">

        </div>
        <div className="flex flex-col w-[80%] text-[20px] gap-[20px] bg-iblue p-[20px] text-white">
          <p>
            Nós somos alunos da ETEC Rio Grande da Serra do 3° ano de Desenvolvimento de Sistemas e estamos desenvolvendo uma empresa durante as aulas de TCC (trabalho de conclusão de cursos).
          </p>
          <p>
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
          {/* <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Yan.jpg')] bg-cover bg-center">

          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Nicole.jpg')] bg-cover bg-center">

          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Ana.jpg')] bg-cover bg-center">

          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Sofia.jpg')] bg-cover bg-center">

          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Duda.jpg')] bg-cover bg-center">

          </div>
          <div className="flex w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/images/Willian.jpg')] bg-cover bg-center">

          </div> */}
           <Carousel loop>
          {images.map((src, i) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div className="relative h-64 flex-[0_0_100%]" key={i}>
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Image src={src} fill className="object-cover" alt="alt" />
              </div>
          );
        })}
      </Carousel>
        </div>
      </div>
    </div>
  );
}
