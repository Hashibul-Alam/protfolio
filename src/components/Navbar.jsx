import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <>
    <nav className='mb-10 flex items-center justify-between py-3'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='w-[45px] sm:w-[60px] sm:h-[34px] h-[28px] mx-2' src={logo} alt="" />
        </div>
        <div className='flex items-center gap-4 text-xl '>
            <FaLinkedin className='hover:text-blue-500 hover:scale-110 transition-all duration-300'/>
            <FaGithub className='hover:text-green-500 hover:scale-110 transition-all duration-300'/>
            <FaSquareXTwitter className='hover:text-green-500 hover:scale-110 transition-all duration-300'/>
            <FaInstagram className='hover:text-[#ee2a7b] hover:scale-110 transition-all duration-300 '/>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar