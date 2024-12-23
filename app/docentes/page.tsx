import Link from 'next/link';
import CardFuncionarios from '../components/funcionarios/CardFuncionarios'

export default async function Docentes (){
  
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[30px]'>Docentes</h2>
      <div className="flex flex-row w-full h-auto sm:gap-[25px] md:gap-[50px] flex-wrap items-center justify-center">
        <CardFuncionarios />
        </div>
    </div>
  )
}
