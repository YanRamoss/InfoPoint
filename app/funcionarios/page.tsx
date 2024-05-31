import React from 'react'
import CardFuncionarios from '../components/funcionarios/CardFuncionarios'
import { PrismaClient } from '@prisma/client'

export default async function Funcionarios (){
  const prisma = new PrismaClient();

  const funcionarios = await fetch('api/funcionario');

  return (
    <div>
      Funcionarios
      {funcionarios.map((f, index) => {
        return(
          <CardFuncionarios
          key={index}
          nomeFuncionario={f.nome}
          cargoFuncionario={f.cargo}
          areaFuncionario={f.area} />
        )
      })}
    </div>
  )
}