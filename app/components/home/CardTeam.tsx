import React from 'react'
type propsType = {
    nome:string,
    foto:string,
}

const HeaderTitle = (props:propsType) => {
  return (
    <div className='flex flex-col w-[40px] h-[50px]'>
        <p className='hidden'>{props.nome}</p>
    </div>
  )
}

export default HeaderTitle
