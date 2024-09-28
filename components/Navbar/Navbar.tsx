'use client'
import React, { useState } from 'react' // Added useState import
import Logo from '../../public/Logo_gold.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Added state for menu toggle

  const toggleMenu = () => { // Added toggle function
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 text-offwhite z-50 overflow-hidden">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="h-16 w-16 mr-2" />
       
      </div>
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-offwhite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <motion.div 
          initial={{ y: "-120%" }}
          animate={{ y: isOpen ? "16%" : "-120%" }}
          transition={{ duration: 0.5 }}
          className={`absolute top-0  right-0 w-full mt-10 p-2 z-50 bg-darkblue text-offwhite shadow-lg`}
        >
          <ul className='text-4xl flex flex-col gap-4 my-12 items-end px-2'>
            <li><a href="#home" className="block text-offwhite hover:text-offwhite">Home</a></li>
            <li><a href="#about" className="block text-offwhite hover:text-offwhite">About</a></li>
            <li><a href="#services" className="block text-offwhite hover:text-offwhite">Services</a></li>
            <li><a href="#contact" className="block text-offwhite hover:text-offwhite">Contact</a></li>
          </ul>
        </motion.div>
      </div>
      <ul className="hidden md:flex items-center space-x-4">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
