import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

  return (
    <header className='py-6 mb-10 relative px-5'>
      <div className="shape shape-red"></div>
      <div className='flex justify-between items-center max-w-[1200px] mx-auto'>
        <div className='logo'>
          <Link href="/"><span className='text-black  text-2xl !font-lusitana flex items-center gap-x-2'><Image src='/logo.svg' height={24} width={24} alt="" />Saarte Investeering</span></Link>
        </div>
        <div>
          <div className='hidden md:block'>
            <nav className='flex gap-x-[32px]'>
    
              <Link href="/" className='font-secondary text-lg italic text-[#15223] opacity-60' ><a className='font-secondary text-lg italic text-[#15223] opacity-60'>Home</a></Link>
              <Link href="/" className='font-secondary text-lg italic text-[#15223] opacity-60' ><a className='font-secondary text-lg italic text-[#15223] opacity-60'>Developments</a></Link>
              <Link href="/" className='font-secondary text-lg italic text-[#15223] opacity-60' ><a className='font-secondary text-lg italic text-[#15223]'>Conferance</a></Link>
              <Link href="/" className='font-secondary text-lg italic text-[#15223] opacity-60' ><a className='font-secondary text-lg italic text-[#15223] opacity-60'>Blog</a></Link>
              <Link href="/" className='font-secondary text-lg italic text-[#15223] opacity-60' ><a className='font-secondary text-lg italic text-[#15223]'>EN</a></Link>
            </nav>
          </div>

          <button className='md:hidden'><AiOutlineMenu className='text-xl' /></button>
        </div>

      </div>

    </header>
  )
}

export default Header;


