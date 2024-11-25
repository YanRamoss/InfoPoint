export default async function CardapioComp() {


  const response = await fetch('https://infopoint-sigma.vercel.app/api/cardapio', { next: { revalidate: 10 }, method: "GET" });
  // const {data} = await response.json();
  const data = [{"cafe": "Bolacha e Leite","almoco": "Arroz e Frango", "cafe2": "Bolacha e Suco", "janta": "Arroz e Frango", "data": "Segunda-feira"},
    {"cafe": "Bolacha e Leite","almoco": "Arroz e Frango", "cafe2": "Bolacha e Suco", "janta": "Arroz e Frango", "data": "Terça-feira"},
    {"cafe": "Bolacha e Leite","almoco": "Arroz e Frango", "cafe2": "Bolacha e Suco", "janta": "Arroz e Frango", "data": "Quarta-feira"},
    {"cafe": "Bolacha e Leite","almoco": "Arroz e Frango", "cafe2": "Bolacha e Suco", "janta": "Arroz e Frango", "data": "Quinta-feira"},
    {"cafe": "Bolacha e Leite","almoco": "Arroz e Frango", "cafe2": "Bolacha e Suco", "janta": "Arroz e Frango", "data": "Sexta-feira"}];

  return (
    <div className="max-w-4xl mx-auto min-h-[600px]">
      <h1 className="text-center text-[25px] py-[30px]">Cardápio Semanal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {data.map((f: any) => {
          return(
          <div key={f.prato} className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{f.data}</h2>
            <p><strong>Café da manhã:</strong> {f.cafe}</p>
            <p><strong>Almoço:</strong> {f.almoco}</p>
            <p><strong>Café da tarde:</strong> {f.cafe2}</p>
            <p><strong>Janta:</strong> {f.janta}</p>
          </div>
          )
        }) } 
      </div>
    </div>
  );
}