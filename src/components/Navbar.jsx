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
            <a href="https://www.linkedin.com/in/hasibul231/" target="_blank"><FaLinkedin className='hover:text-blue-500 hover:scale-110 transition-all duration-300'/></a>
            <a href="https://github.com/sha2311" target="_blank"> <FaGithub className='hover:text-green-500 hover:scale-110 transition-all duration-300'/></a>
            <a href="https://github.com/sha2311" target="_blank"><FaSquareXTwitter className='hover:text-green-500 hover:scale-110 transition-all duration-300'/></a>
           <a href="https://github.com/sha2311" target="_blank"> <FaInstagram className='hover:text-[#ee2a7b] hover:scale-110 transition-all duration-300 '/></a>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar