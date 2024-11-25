import Banners from "./components/banners/Banners";

export default function Home(){
  return (
    <div className="mx-auto py-[50px]">
        <h1 className="flex items-center justify-center bg-[url('/imagens/pages/home-banner.jpg')] bg-cover bg-center h-[220px] text-[25px] py-[30px]">
          <div className="title">Quem Somos</div>
        </h1> 
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto mt-10 gap-[30px] justify-center" >
        <div className="hidden md:flex w-[80%] h-[500px] bg-[url('/imagens/cursos/etec.jpg')] bg-cover bg-center rounded-[3px]">

        </div>
        <div className="flex flex-col sm:w-[100%] md:w-[80%] text-[20px] gap-[20px] bg-iblue p-[20px] text-white">
          <p className='text-justify'>
            Nós somos alunos da ETEC Rio Grande da Serra do 3° ano de Desenvolvimento de Sistemas e estamos desenvolvendo uma empresa durante as aulas de TCC (trabalho de conclusão de curso).
          </p>
          <p className='text-justify'>
            Nosso projeto inclui um totem de informações interativo para otimizar a divulgação de informações sobre a unidade escolar, proporcionando uma experiência de comunicação eficiente e acessível para alunos, pais, professores e comunidade, promovendo assim o engajamento e o fortalecimento dos laços entre a escola e seu público-alvo. 
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mt-[80px] mb-[30px] mx-auto gap-[30px] text-black">
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Missão</h2>
          <p className='text-[17px]'>Nossa missão é transformar a rotina e vida escolar dos alunos e docentes, tornando-a mais prática e simples em questão da transmissão de informções, fazendo com que todo frequentador do âmbito escolar tenha melhor experiência acadêmica.</p>
        </div>
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Visão</h2>
          <p className='text-[17px]'>Unir a comunidade e mudar a forma padrão de transmitir a informação escolar através da tecnologia, promovendo um espaço onde a comunicação seja transparente, ágil e acessível para todos, além da expansão do projeto a longo prazo.</p>
        </div>
        <div className="flex flex-col">
          <h2 className='text-[23px] font-semibold'>Valores</h2>
          <ul className='text-[17px]'>
          <li><b>Transparência:</b> Trabalhamos de forma honesta, mostrando todos nossos objetivos e sendo fiel ao nosso público;</li>
          <li><b>Acessibilidade:</b> é um sistema acessível, pois está localizado dentro da escola, disponível para os que frequentam esse ambiente;</li>
          <li><b>Ética:</b> trabalhamos de forma ética, guardando todas as informações passadas a nós;</li>
          <li><b>Responsabilidade social:</b> Como é um projeto que envolve público, foi tudo pensado para que seja uma experiência única para cada um;</li>
          <li>Simplicidade chamativa e inovadora para que todos consigam utilizar o totem da melhor forma, tendo uma boa experiência;</li>
        </ul>
        </div>
        <a id="aw0" target="_blank" href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsuGYLmr1FanNZuOO7HKulnX2pHG6Dql0OVKMn7ACVtVB9-PoKFKcM6hPx15paL8ETU9VLf-8NRYXzKFvuCrmibhaGja_2G8U8wepBNxX52J2dwPLNw1hvx73xUN3T-WaI0ce1YfXOJQekIqFdZ6OuszueMdtAXfwfUO1WCzVt83p127l5YxOMH6J16BWvBJ8Shqxr3r0qD3DD7kQyBETgNeG3359aMXRK8WSX5XGnO_XXkiM0bw8sBebBSj_t9ukDAt9eElJRbyl0yLMMLOX3esDVGAeovFcB9UrosPjSy5_jNAGeu4K-K36jrlc6dQmJW9-axDkFq3Nu6gPUOJgckPYUFIn-KViFK4kWQBrFAVbGNirO5jmCy9qYs&amp;sai=AMfl-YTsHQk7VT8GQsNm27Q3SxqqoapHbZX_LRkVc0Ta9tt6EroGenxHddNy1zEk-3XDBWtfLPhNTTT47L_1XQ4M7G0hrVK4WoZPKMB50C75ChrsSaSxI7bGxv0acV49&amp;sig=Cg0ArKJSzLCWWmen_W2a&amp;fbs_aeid=%5Bgw_fbsaeid%5D&amp;adurl=https://www.meupesominhajornada.com.br/hcp-locator1.html%3Fcid%3Dpaid3-km2ixbfhe3&amp;nm=1" onfocus="ss('aw0')" onmousedown="st('aw0')" onmouseover="ss('aw0')" onclick="ha('aw0')"><img src="https://tpc.googlesyndication.com/simgad/6056220365001979595" border="0" width="970" height="250" alt="" class="img_ad">
        <img src="https://tpc.googlesyndication.com/simgad/6056220365001979595" border="0" width="970" height="250" alt="" class="img_ad">
        </a>
       </div>
      <div className="flex w-[100%] h-[3px] my-[30px] bg-iblue">

      </div>
      <div className="flex flex-col">
        <h1 className='text-[25px] text-center my-[30px]'>Nosso Time</h1>
        <div className="flex flex-row flex-wrap gap-[30px] justify-center">
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Yan.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Yan Ramos
    </div>
  </div>
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Nicole.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Nicole Tenório
    </div>
  </div>
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Ana.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Ana Luisa
    </div>
  </div>
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Sofia.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Sofia Araujo
    </div>
  </div>
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Duda.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Maria Eduarda
    </div>
  </div>
  <div className="flex cursor-pointer w-[200px] h-[250px] bg-[#c9c9c9b4] rounded-[3px] bg-[url('/imagens/Willian.jpg')] bg-cover bg-center group justify-center items-center">
    <div className='text-center bg-iblue w-full ts hidden group-hover:block text-white p-2 bg-black opacity-75'>
      Willian Freire
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
