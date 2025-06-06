import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experiência Profissional</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Grupo GPS – Assistente de Sistemas</h3>
            <span className="text-sm text-gray-400">Agosto 2023 - Novembro 2024</span>
            <p className="text-gray-300 mt-2">
              Desenvolvimento e manutenção de aplicações .NET, APIs com ASP.NET, front-end com React e suporte a banco de dados SQL Server.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Grupo GPS – Estagiário de QA</h3>
            <span className="text-sm text-gray-400">Julho 2022 - Agosto 2023</span>
            <p className="text-gray-300 mt-2">
              Testes manuais e automatizados em sistemas web, reporte de bugs e colaboração em correções.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cacau Show – Líder de Estoque</h3>
            <span className="text-sm text-gray-400">Dezembro 2017 - Fevereiro 2019</span>
            <p className="text-gray-300 mt-2">
              Gestão de equipe, controle de entrada e saída de mercadorias e liderança operacional.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
