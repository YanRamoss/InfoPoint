import Link from 'next/link';
import CardFuncionarios from '../components/funcionarios/CardFuncionarios'

export default async function Funcionarios (){
  const PORT = process.env.PORT;

  const response = await fetch('https://localhost:3242/api/funcionario', {next: {revalidate: 10}, method: "GET"});
  const {data} = await response.json();
  console.log(data);
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[30px]'>Funcionários</h2>
      <div className="flex flex-row w-full h-auto gap-[50px] flex-wrap justify-center">
         {data.map((f: any) => { 
          return(
            <CardFuncionarios
            key={f.nome}
            nomeFuncionario={f.nome}
            cargoFuncionario={f.cargo}
            areaFuncionario={f.area}
            fotoFuncionario={f.imagem} />
          )
        })} 
      </div>
    </div>
  )
}
