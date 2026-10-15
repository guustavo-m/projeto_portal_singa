import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Areas from "../components/Areas";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import { areas, projects } from "../services/data";

export default function Home() {
  // O filtro é compartilhado entre <Areas /> (escolhe) e <Projects /> (mostra)
  const [area, setArea] = useState("Todos");
  const filtered = projects.filter((p) => area === "Todos" || p.area === area);

  return (
    <div className="bg-[#f7f7f7] font-['Montserrat',system-ui,sans-serif] text-[#333] scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <Header />
      <Hero />
      <Areas areas={areas} selected={area} onSelect={setArea} />
      <Projects projects={filtered} />
      <About />
      <Footer />
    </div>
  );
}