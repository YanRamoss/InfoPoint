import React from 'react'
import CardFuncionarios from '../components/funcionarios/CardFuncionarios'

const Funcionarios = () => {
  return (
    <div>
      Funcionários
      <CardFuncionarios
      nomeFuncionario='Yan dos Santos Ramos'
      cargoFuncionario='Programador'
      areaFuncionario='Programação' />
    </div>
  )
}

export default Funcionarios
