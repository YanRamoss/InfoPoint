import React from 'react'
type propsType = {
    nomeFuncionario:string,
    cargoFuncionario:string,
    areaFuncionario?:string,
    fotoFuncionario:string,
}

const CardFuncionarios = (props:propsType) => {
  return (
    <div className='flex flex-col w-[180px] h-[auto]'>
      <div className='flex w-[100%] h-[150px] bg-[#9b9b9b88] rounded-[3px] cursor-pointer'>
      </div>
      <p>{props.nomeFuncionario}</p>
      <p>{props.cargoFuncionario}</p>
      <p>Área de Atuação</p>
      </div>
  )
}

export default CardFuncionarios
