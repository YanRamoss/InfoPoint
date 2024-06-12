import CardFuncionarios from '../components/funcionarios/CardFuncionarios'

export default async function Funcionarios (){

  const response = await fetch('https://infopoint-sigma.vercel.app/api/funcionario', {next: {revalidate: 10}, method: "GET"});
  const {data} = await response.json();
  console.log(data);
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[20px]'>Funcionários</h2>
      <div className="flex flex-row w-full h-auto gap-[50px] flex-wrap justify-center">
        {data.map((f: any) => {
          return(
            <CardFuncionarios
            key={f.nome}
            nomeFuncionario={f.nome}
            cargoFuncionario={f.cargo}
            areaFuncionario={f.area} />
          )
        })}
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
        <CardFuncionarios nomeFuncionario='Nome do Funcionário' cargoFuncionario='Cargo' areaFuncionario='Área de Atuação'/>
      </div>
    </div>
  )
}