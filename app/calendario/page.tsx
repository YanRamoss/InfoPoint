import React from 'react'

const Calendario = () => {
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[30px]'>Calendário</h2>
      <embed className='mx-auto' src="/calendario.pdf" width="1000" height="800" 
       type="application/pdf">
      </embed>
    </div>
  )
}

export default Calendario
 
