import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900" id="hero">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Olá, eu sou o Victor Del Valle</h1>
        <p className="text-xl text-gray-300 mb-6">Desenvolvedor .NET & Front-End com React</p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Ver Projetos
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
