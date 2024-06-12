import React from 'react'
type propsType = {
    title:string,
    image:string,
}

const HeaderTitle = (props:propsType) => {
  return (
    <div className='flex flex-col w-[40px] h-[50px]'>
        <p>{props.title}</p>
    </div>
  )
}

export default HeaderTitle
