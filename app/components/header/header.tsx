import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InfoPoint from '@/public/Infopoint.png';
import HeaderTitle from './HeaderTitle';
const Header = () => {
  return (
    <header className='fixed top-0 z-[1000]'>
  <div className='flex flex-row h-[70px] w-screen items-center justify-center border-b-4 border-[#43FEF6] bg-iblue'>
    <Link href='./'>
      <Image
        src={InfoPoint}
        width={200}
        height={80}
        alt='InfoPoint' />
    </Link>
  </div>
  <nav className='flex flex-row p-5 mx-auto justify-center gap-[15px] md:gap-[30px] sm:text-[10px] md:text-sm font-medium bg-white'>
    <Link href="/" className='relative group'>
      Home
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
    <Link href="/nossa-escola" className='relative hidden md:flex group'>
      Nossa Escola
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
    <Link href="/nossa-escola" className='relative flex md:hidden group'>
      Escola
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
    <Link href="/cardapio" className='relative group'>
      Cardápio
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
    <Link href="/calendario" className='relative group'>
      Calendário
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
    <Link href="/docentes" className='relative group'>
      Docentes
      <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-iblue group-hover:w-full transition-all duration-300'></div>
    </Link>
  </nav>
</header>

  )
}

export default Header
