import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InfoPoint from '@/public/Infopoint.png';

const Header = () => {
  return (
    <header>
        <div className='flex flex-row h-[70px] w-screen items-center justify-center border-b-4 border-[#43FEF6] bg-iblue'>
            <Image
            src={InfoPoint}
            width={200}
            height={80}
            alt='InfoPoint' />
        </div>
        <nav className='flex flex-row p-5 mx-auto justify-center gap-[30px] text-lg font-medium'>
            <Link href="/">Home</Link>
            <Link href="/cardapio">Cardápio</Link>
            <Link href="/calendario">Calendário</Link>
            <Link href="/funcionarios">Funcionários</Link>
            <Link href="/sobre-nos">Sobre Nós</Link>
        </nav>
    </header>
  )
}

export default Header
