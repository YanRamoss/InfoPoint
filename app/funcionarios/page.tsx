import CardFuncionarios from '../components/funcionarios/CardFuncionarios'

export default async function Funcionarios (){

  const response = await fetch('https://infopoint-sigma.vercel.app/dapi/funcionario', {next: {revalidate: 10}, method: "GET"});
  const {data} = await response.json();
  console.log(data);
  return (
    <div>
      Funcionarios
      {data.map((f: any) => {
        return(
          <CardFuncionarios
          key={f.nome}
          nomeFuncionario={f.nome}
          cargoFuncionario={f.cargo}
          areaFuncionario={f.area} />
        )
      })}
    </div>
  )
}