import Image from 'next/image'
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
      <div className="flex relative w-[80%] h-[150px] rounded-[3px] cursor-pointer">  
        <Image
        src={props.fotoFuncionario}
        alt={props.nomeFuncionario}
        fill={true}
        quality={100}
        style={{objectFit: "cover"}}
        />
      </div>
      <p>{props.nomeFuncionario}</p>
      <p>{props.cargoFuncionario}</p>
      <p>Área de Atuação</p>
      </div>
  )
}

export default CardFuncionarios
