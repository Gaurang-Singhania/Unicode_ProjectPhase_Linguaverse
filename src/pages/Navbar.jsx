import React from 'react';
import logo from '../assets/landingpage/Subtract.svg';
import user from '../assets/landingpage/User.svg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate('/login')
  }
  return (
    <nav className="custom-gradient3 rounded">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <div className="flex items-center"> 
          <img src={logo} className="mr-2" alt="Logo" /> 
          <span className='absolute text-white font-bold text-2xl ml-24' style={{ fontFamily: 'Literata, serif', fontWeight: 800 }}>LingoVerse</span>
        </div>
        {/* Navigation links */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
          <img
            src={user}
            className='p-2 w-12 h-12 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:border border-transparent hover:shadow-lg cursor-pointer'
            alt="User"
            onClick={handleClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;