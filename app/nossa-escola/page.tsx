import React from 'react'
import CardCurso from '../components/nossa-escola/Cards'

const NossaEscola = () => {
  return (
    <div className='flex flex-col h-[auto] gap-[30px]'>
      <h1 className='text-[25px] text-center my-[30px]'>Nossa Escola</h1>
      <div className="flex flex-col w-[90%] mx-auto">
        <h2 className='text-[23px]'>História</h2>
        <p className='text-[17px]'>Em outubro de 2014 foi inaugurada a Etec Rio Grande da Serra localizada no município que nomeia esta nova unidade escolar. O espaço onde hoje a escola é sediada, funcionava o Centro Social Urbano, clube que ao longo do tempo deixou de cumprir sua funcionalidade social, dando oportunidade para que a Prefeitura do município realizasse uma parceria com o Governo do Estado de São Paulo, e mais especificamente com o Centro Paula Souza para o planejamento e implantação da unidade escolar.</p>
      </div>
      <div className="flex flex-col w-[90%] mx-auto">
        <h2 className='text-[23px]'>Começo</h2>
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <p className='text-[17px] w-[100%]'>No primeiro momento a escola inicia suas atividades como extencão da ETEC Julio Mesquita de Santo André. A Prof. Suely de Campos França Magini foi quem capitaneou a implantaçãoo desta nova unidade escolar do Centro Paula Souza. Em outubro de 2014 o governador do Estado de São Paulo decreta a criação da Etec de Rio Grande da Serra, e nomeia o Prof.Cláudio Kubilius como Diretor da unidade.</p>
          <div className="flex w-[100%] h-[300px] bg-[url('/imagens/cursos/etec.jpg')] bg-cover bg-center rounded-[3px]">

          </div>
        </div>
      </div>
      <div className="flex w-[100%] h-[3px] my-[30px] bg-iblue">

      </div>
      <div className="flex flex-col gap-[30px]">
        <h1 className='text-[25px] w-[90%] mx-auto'>Cursos</h1>
        <CardCurso imagem="/imagens/cursos/adm.jpg" titulo='Administração' descricao='O técnico em Administração gerencia recursos e executa tarefas administrativas, além de atender clientes e trabalhar em equipe. Busca otimizar processos, sugerir inovações e manter ética em todas as atividades.' />
        <CardCurso imagem="/imagens/cursos/ds.jpg" titulo='Desenvolvimento de Sistemas' descricao='É o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.' />
        <CardCurso imagem="/imagens/cursos/edf.jpg" titulo='Edificações' descricao='O Técnico em Edificações projeta e executa obras seguindo normas técnicas e legais, planeja e orça projetos, supervisiona construções, oferece assistência técnica em pesquisas e controle de materiais, coordena manutenções e orienta sobre produtos e equipamentos especializados na Construção Civil.' />
        <CardCurso imagem="/imagens/cursos/infonet.jpg" titulo='Informatica para internet' descricao='O técnico em Informática para Internet desenvolve programas de computador e aplicativos para dispositivos móveis, utiliza ferramentas de desenvolvimento de sistemas para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos.' />
        <CardCurso imagem="/imagens/cursos/rh.jpg" titulo='Recursos Humanos' descricao='O Técnico em Recursos Humanos administra as relações e ética no ambiente de trabalho. Suas responsabilidades incluem tarefas administrativas, como folha de pagamento e benefícios, além de desenvolver os funcionários por meio de treinamentos e avaliações de desempenho.' />
        <CardCurso imagem="/imagens/cursos/comercio.jpg" titulo='Comércio' descricao='O curso enfoca os processos de compra e venda, com destaque para a matemática no cálculo de lucros e preços. Os alunos aprenderão a gerenciar estoques, analisar concorrência e fornecedores, controlar qualidade e negociar com clientes. Além disso, serão ensinadas técnicas de marketing para atrair consumidores, como a arrumação estratégica de produtos em pontos de venda.' />
        <CardCurso imagem="/imagens/cursos/gestao.jpg" titulo='Gestão de Projetos' descricao='A gestão de projetos é a aplicação de conhecimentos, técnicas e habilidades na elaboração de atividades para atingir determinados objetivos. Simplificando, é uma metodologia que permite transformar estratégias em resultados, em especial, no contexto dos negócios.' />
        <CardCurso imagem="/imagens/cursos/transacoes.jpg" titulo='Transações Imobiliárias' descricao='O Técnico em Transações Imobiliárias é um profissional que facilita transações de imóveis, administra propriedades, orienta sobre documentação, pesquisa mercado, capta e comercializa imóveis, avalia propriedades, interpreta projetos arquitetônicos, estuda potencialidades das edificações e tendências do mercado, além de oferecer assessoria pós-transação aos clientes.' />
        <CardCurso imagem="/imagens/cursos/secretariado.jpg" titulo='Secretariado' descricao='O Técnico em Secretariado auxilia executivos, gerencia informações, coordena equipes, controla documentos, realiza atendimento ao cliente, negociações, administra relacionamentos, atua na gestão de processos, elabora apresentações, relatórios administrativos e executa serviços específicos da empresa.' />
      </div>
    </div>
  )
}

export default NossaEscola
