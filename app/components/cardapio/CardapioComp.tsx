export default async function CardapioComp() {

  type info = {
    prato: string,
    dia: string,
  }

  const response = await fetch('https://infopoint-sigma.vercel.app/api/cardapio', {next: {revalidate: 10}, method: "GET"});
  const {info} = await response.json();
  return (
    <div className="max-w-4xl mx-auto min-h-[600px]">
      <h1 className="text-center text-[25px] py-[30px]">Cardápio Semanal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {Object.entries(info).map(([prato, dia]) => (
          <div key={info.prato} className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{info.dia}</h2>
            <p><strong>Almoço:</strong> {info.prato}</p>
          </div>
        ))}
      </div>
    </div>
  );
}