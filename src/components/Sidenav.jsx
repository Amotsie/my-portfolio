import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const Sidenav = () => {
  const [nav, setnav] = useState(false);
  const linkStyles = "flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100";

  function handleNav() {
    setnav(!nav);
  }
  return (
    <div>
      <AiOutlineMenu className='absolute top-4 right-4 z-[99] md:hidden' onClick={handleNav} />
      {
        nav && (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href="#main" className={linkStyles} onClick={handleNav}>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a href="#work" className={linkStyles} onClick={handleNav}>
              <GrProjects size={20} />
              <span className='pl-4'>Work</span>
            </a>
            <a href="#projects" className={linkStyles} onClick={handleNav}>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a href="#main" className={linkStyles} onClick={handleNav}>
              <BsPerson size={20} />
              <span className='pl-4'>Resume</span>
            </a>
            <a href="#contact" className={linkStyles} onClick={handleNav}>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
      }

      <div className='hidden md:block fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <GrProjects size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <BsPerson size={20} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav