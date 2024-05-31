import React from 'react'
import CardFuncionarios from '../components/funcionarios/CardFuncionarios'
import { PrismaClient } from '@prisma/client'

export default async function Funcionarios (){
  const prisma = new PrismaClient();

  const funcionarios = await prisma.funcionario.findMany({
    select: {id:true, nome: true, cargo: true, area: true}
  });
  return (
    <div>
      Funcionarios
      {funcionarios.map((f) => {
        return(
          <CardFuncionarios
          key={f.id}
          nomeFuncionario={f.nome}
          cargoFuncionario={f.cargo}
          areaFuncionario={f.area} />
        )
      })}
    </div>
  )
}