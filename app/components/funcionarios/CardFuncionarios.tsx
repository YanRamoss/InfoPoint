import React from 'react'
type propsType = {
    nomeFuncionario:string,
    cargoFuncionario:string,
    areaFuncionario?:string,
}

const CardFuncionarios = (props:propsType) => {
  return (
    <div>
        {props.nomeFuncionario}
        {props.cargoFuncionario}
        {props.areaFuncionario}
    </div>
  )
}

export default CardFuncionarios
