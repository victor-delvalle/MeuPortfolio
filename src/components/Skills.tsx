import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    "C#",
    ".NET",
    "ASP.NET",
    "React",
    "JavaScript",
    "SQL Server",
    "Git",
    "Azure",
    "DDD"
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-gray-600 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
