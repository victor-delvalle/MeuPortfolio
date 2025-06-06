import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "UserManagement API",
      description:
        "API backend em ASP.NET Core com arquitetura DDD. Permite criar, consultar e atualizar usuários com SQL Server.",
      url: "https://github.com/victor-delvalle/UserManagementAPI",
    },
    {
      title: "Jogo de Xadrez no Console",
      description:
        "Jogo de xadrez em C# executado no console. Implementa regras básicas do xadrez com foco didático.",
      url: "https://github.com/victor-delvalle/Jogo-de-Xadrez",
    },
    {
      title: "Loja do Seu Manoel",
      description:
        "API RESTful com .NET 8 simulando controle de pedidos e produtos. Código organizado e testável, ideal para estudos.",
      url: "https://github.com/victor-delvalle/LojaDoSeuManoel",
    },
    {
      title: "Tarefas API",
      description:
        "API simples construída com Java + Spring Boot para gerenciar tarefas (CRUD). Excelente para testes e estudos.",
      url: "https://github.com/victor-delvalle/TarefasApi",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <a
                href={project.url}
                className="text-blue-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
