import React from 'react'
// type propsType = {
//     nomeFuncionario:string,
//     cargoFuncionario:string,
//     areaFuncionario?:string,
// }

// const CardFuncionarios = (props:propsType) => {
const CardFuncionarios = () => {
  return (
    <div className='flex flex-col w-[auto] h-[auto]'>
      <div className='flex w-[100%] h-[150px] bg-[#9b9b9b88] rounded-[3px]'>
      </div>
      {/* <p>{props.nomeFuncionario}</p>
      <p>{props.cargoFuncionario}</p> */}
      <p>Nome do Funcionário</p>
      <p>Cargo</p>
      <p>Área de Atuação</p>
      </div>
  )
}

export default CardFuncionarios
