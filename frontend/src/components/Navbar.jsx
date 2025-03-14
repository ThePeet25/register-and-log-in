import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { SiSurveymonkey } from "react-icons/si";
import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full py-6 px-12 z-50">
      <div className="container mx-auto px-12  py-3 flex justify-between items-center bg-white text-neutral-800 shadow-lg shadow-white rounded-full">
        <Link to="/" className="flex items-center space-x-1">
          <SiSurveymonkey className="size-10" />
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink
              to="/"
              className="text-lg font-medium hover:text-neutral-400 transition-colors"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg font-medium hover:text-neutral-400 transition-colors"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg font-medium hover:text-neutral-400 transition-colors"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <CiMenuBurger className="size-8 " />
        </div>
        <button className="max-md:hidden md:px-4 py-1 text-lg text-white font-medium bg-neutral-800 rounded-full hover:drop-shadow-md hover:scale-110 active:scale-90 transition-all">
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
