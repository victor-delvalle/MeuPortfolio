import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="w-full fixed top-0 bg-gray-800 shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Victor Del Valle</h1>
        <ul className="flex gap-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white">Sobre</a></li>
          <li><a href="#experience" className="hover:text-white">Experiência</a></li>
          <li><a href="#projects" className="hover:text-white">Projetos</a></li>
          <li><a href="#skills" className="hover:text-white">Habilidades</a></li>
          <li><a href="#contact" className="hover:text-white">Contato</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
