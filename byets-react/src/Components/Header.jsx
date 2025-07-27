import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';

export default function Header() {
  const [showMobNav, setShowMobNav] = useState("h-0 py-0");
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
        <div className="hidden md:block">
          <Link to="/">
            <img src={logo} alt="" className='w-40' />
          </Link>
        </div>
        <div className="md:hidden flex justify-between items-center w-full">
          <Link to="/">
            <img src={logo} alt="" className='w-20' />
          </Link>
          <button className="focus:outline-none text-white hover:text-gray-400 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
              setShowMobNav(showMobNav === "h-0 py-0" ? "h-auto py-2" : "h-0 py-0");
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row space-x-4 text-lg transition-all duration-300 ease-in-out md:space-x-6 overflow-hidden md:h-auto md:py-0 ${showMobNav}`}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "text-wihte underline": "text-stone-300 hover:text-white"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-wihte underline": "text-stone-300 hover:text-white"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({isActive}) => isActive ? "text-wihte underline": "text-stone-300 hover:text-white"}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-wihte underline": "text-stone-300 hover:text-white"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-wihte underline": "text-stone-300 hover:text-white"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in" className={({isActive}) => isActive ? "text-white underline": "text-stone-300 hover:text-white"}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({isActive}) => isActive ? "text-white underline": "text-stone-300 hover:text-white"}>Users</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
