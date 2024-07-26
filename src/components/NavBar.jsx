import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <a href='/' className="text-2xl lg:text-4xl text-black hover:text-[#555] cursor-pointer font-medium">
          Jawad<br/>Rada
        </a>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#333] hover:text-[#555] focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}>
          <a href="https://drive.google.com/file/d/1tJr7EjpOXKxJ8QPTUtnX7T01HiI7MZ3S/view?usp=drive_link" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black text-[#555] mr-10">Resume</a>
          <a href="https://github.com/jawadrada?tab=overview&from=2024-07-01&to=2024-07-23" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black text-[#555] mr-10">GitHub</a>
          <a href="https://www.linkedin.com/in/jawad-rada/" target="_blank" className="block mt-4 lg:inline-block lg:mt-0 hover:text-black text-[#555] mr-10">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

