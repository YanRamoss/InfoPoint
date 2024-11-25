import React from 'react'

const Calendario = () => {
  return (
    <div className='flex w-[90%] h-auto flex-col mx-auto'>
      <h2 className='text-center text-[25px] py-[30px]'>Calendário</h2>
      <embed className='mx-auto hidden md:flex' src="/calendario.pdf" width="1000" height="800" 
       type="application/pdf">
      </embed>
      <a href="/calendario.pdf" className="flex md:hidden" download>Baixe agora o calendário anual.</a>
    </div>
  )
}

export default Calendario
 
