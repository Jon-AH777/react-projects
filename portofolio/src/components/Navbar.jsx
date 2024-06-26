/* import React, { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Navbar = ({ darkMode, setDarkMode }) => {

  return (
    <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 className='text-x1 font-serif'>developedbyai</h1>
        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill 
                    onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
                    className = "cursor-pointer text-2xl"
                />
            </li>
            <li>
                <a href="#" className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>
                     Resume
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar */