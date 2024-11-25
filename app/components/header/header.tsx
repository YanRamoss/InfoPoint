import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InfoPoint from '@/public/Infopoint.png';
import HeaderTitle from './HeaderTitle';
const Header = () => {
  return (
    <header className='fixed top-0'>
        <div className='flex flex-row h-[70px] w-screen items-center justify-center border-b-4 border-[#43FEF6] bg-iblue'>
            <Link href='./'>
              <Image
              src={InfoPoint}
              width={200}
              height={80}
              alt='InfoPoint' />
            </Link>
        </div>
        <nav className='flex flex-row p-5 mx-auto justify-center gap-[30px] sm:text-lg text-sm font-medium bg-white'>
            <Link href="/">Home</Link>
            <Link href="/nossa-escola">Nossa Escola</Link>
            <Link href="/cardapio">Cardápio</Link>
            <Link href="/calendario">Calendário</Link>
            <Link href="/funcionarios">Funcionários</Link>
        </nav>
        {/* <HeaderTitle title='Home' image="teste" /> */}
    </header>
  )
}

export default Header
