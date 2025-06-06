import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contato</h2>
        <p className="text-gray-300 mb-6">
          Está interessado em trabalhar comigo ou quer saber mais? Entre em contato:
        </p>
        <div className="space-y-3 text-white">
          <p><strong>Email:</strong> victor_delvalle@outlook.com.br</p>
          <p><strong>Telefone:</strong> (11) 94853-1413</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/victor-del-valle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              Linkedin
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
