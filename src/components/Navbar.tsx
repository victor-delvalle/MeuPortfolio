import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed top-0 bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-200">Victor Del Valle</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} className="text-gray-200" /> : <FaBars size={24} className="text-gray-200" />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 w-full px-4 pb-4 space-y-4 text-gray-200 font-medium text-center border-t border-gray-700">
          <li>
            <a href="#home" onClick={toggleMenu} className="block hover:text-blue-400">
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="block hover:text-blue-400">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className="block hover:text-blue-400">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-400">
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
