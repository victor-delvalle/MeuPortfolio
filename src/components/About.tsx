import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
        <p className="text-gray-300 text-lg">
          Sou um desenvolvedor apaixonado por tecnologia e criação de soluções eficientes.
          Tenho experiência em .NET, C#, ASP.NET, React e SQL Server.
          Gosto de unir backend robusto com front-end moderno e responsivo.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
