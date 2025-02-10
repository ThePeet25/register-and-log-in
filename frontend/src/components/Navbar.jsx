import React from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { SiSurveymonkey } from "react-icons/si";
import { MdMenuOpen } from "react-icons/md";


const Navbar = () => {
    return (
        <nav className="py-6 px-12">
            <div className="container mx-auto px-12  py-3 flex justify-between items-center bg-white text-neutral-800 shadow-lg shadow-white rounded-full">
                <div className="flex items-center space-x-1">
                    <SiSurveymonkey className="size-10"/>
                </div>
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="#" className="text-lg font-medium hover:text-neutral-400 transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-lg font-medium hover:text-neutral-400 transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-lg font-medium hover:text-neutral-400 transition-colors">Contact</a>
                    </li>
                </ul>
                <div className="md:hidden">
                    <CiMenuBurger className="size-8 " />
                </div>
                <button className="max-sm:hidden md:px-4 py-1 text-lg font-medium ring-2 ring-neutral-800 rounded-2xl hover:bg-neutral-800 hover:text-white active:scale-90 transition-all">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;