import React from 'react'

const Calendario = () => {
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[30px]'>Calendário</h2>
      <embed src="/calendario.pdf" width="500" height="375" 
       type="application/pdf">
    </div>
  )
}

export default Calendario
 
