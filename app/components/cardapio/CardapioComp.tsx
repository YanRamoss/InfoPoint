export default async function CardapioComp() {


  const response = await fetch('https://infopoint-sigma.vercel.app/api/cardapio', { next: { revalidate: 10 }, method: "GET" });
  const {data} = await response.json();
  console.log(data);
  return (
    <div className="max-w-4xl mx-auto min-h-[600px]">
      <h1 className="text-center text-[25px] py-[30px]">Cardápio Semanal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {data.map((f: any) => ( // Specify the type for item
          <div key={f.prato} className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{f.data}</h2>
            <p><strong>Almoço:</strong> {f.prato}</p>
          </div>
        ))}
      </div>
    </div>
  );
}