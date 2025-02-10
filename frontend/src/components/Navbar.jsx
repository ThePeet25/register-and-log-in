import {React, useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='h-24 px-12 py-4 flex justify-center items-center md:px-20'>
        <nav className='container relative bg-white  h-4/5 flex justify-between items-center px-10 rounded-3xl space-x-10 shadow-lg shadow-white md:px-18'>
            <h1 className='text-neutral-800 text-2xl font-bold cursor-default' >Logo</h1>
            <RxHamburgerMenu className='absolute right-0 md:hidden hover:drop-shadow-xl' /> 
            <ul className='hidden md:flex space-x-8'>
                <li className='text-neutral-800 text-xl font-semibold cursor-pointer hover:drop-shadow-lg'>Home</li>
                <li className='text-neutral-800 text-xl font-semibold cursor-pointer hover:drop-shadow-lg'>Login</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar