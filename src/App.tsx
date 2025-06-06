import { useEffect, type JSX } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App(): JSX.Element {
  useEffect(() => {
    document.title = "Victor Del Valle - Desenvolvedor";
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact/>
    </div>
  );
}

export default App;
