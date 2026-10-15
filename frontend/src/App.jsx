import { useState } from "react";

// ====== EDITE AQUI ======
const AREAS = ["Todos", "Segurança", "Gestão", "Operações"];

const PROJECTS = [
  {
    title: "NR — Dashboard de Treinamentos",
    desc: "Controle de treinamentos de NR com filtro por status.",
    area: "Segurança",
    url: "https://apps.powerapps.com/play/e/default-7ab53e68-32c9-4a15-9bff-c216123dbfb2/a/f78120c8-d763-4dfb-966a-93d39d3e293f?tenantId=7ab53e68-32c9-4a15-9bff-c216123dbfb2&hint=6bfef717-cbe8-4b1f-b38b-0968432fc074&sourcetime=1792006217282&hideNavBar=true#",
  },
  {
    title: "Projeto 2",
    desc: "Descreva em uma frase o que o app resolve.",
    area: "Gestão",
    url: "https://apps.powerapps.com/play/COLE-O-LINK-AQUI",
  },
  {
    title: "Projeto 3",
    desc: "Descreva em uma frase o que o app resolve.",
    area: "Operações",
    url: "https://apps.powerapps.com/play/COLE-O-LINK-AQUI",
  },
  {
    title: "Projeto 4",
    desc: "Descreva em uma frase o que o app resolve.",
    area: "Gestão",
    url: "https://apps.powerapps.com/play/COLE-O-LINK-AQUI",
  }
];

const LEFT = [
  ["HOME", "home"],
  ["ÁREAS", "areas"],
  ["PROJETOS", "projetos"],
];
const RIGHT = [
  ["SOBRE", "sobre"],
  ["CONTATO", "contato"],
];

const CONTACT = {
  phone: "(11) 93310-1299",
  address: ["R. José Gallo, 320 \nVista Alegre \nVinhedo - SP \nCEP 13285-332"],
  linkedin: "https://br.linkedin.com/company/singapura-constru%C3%A7%C3%A3o-e-montagens-industriais",
};

// Imagens (pasta /public): logo.png, logo-branca.png (footer), hero.avif, sobre.jpg
// ========================

const NavLinks = ({ items }) =>
  items.map(([label, id]) => (
    <a
      key={id}
      href={`#${id}`}
      className="text-sm font-bold text-[#7a1f47] transition-colors hover:text-[#b0123f] md:text-lg"
    >
      {label}
    </a>
  ));

const Square = ({ className }) => (
  <i className={`absolute hidden h-[114px] w-[114px] md:block ${className}`} />
);

const Title = ({ children, light, className = "" }) => (
  <h2
    className={`text-3xl font-normal tracking-[3px] md:text-[44px] ${
      light ? "text-white" : "text-[#7a1f47]"
    } ${className}`}
  >
    {children}
  </h2>
);

const FooterTitle = ({ children }) => (
  <h3 className="mb-3 text-[26px] font-normal text-white">{children}</h3>
);

export default function App() {
  const [area, setArea] = useState("Todos");
  const list = PROJECTS.filter((p) => area === "Todos" || p.area === area);

  return (
    <div className="bg-[#f7f7f7] font-['Montserrat',system-ui,sans-serif] text-[#333] scroll-smooth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-10 grid grid-cols-1 justify-items-center gap-2 bg-white/70 px-4 py-4 md:h-[190px] md:grid-cols-[1fr_220px_1fr] md:items-start md:justify-items-stretch md:bg-transparent md:px-0 md:pb-0 md:pt-[90px]">
        <nav className="order-2 flex flex-wrap justify-center gap-5 md:order-none md:justify-end md:gap-9 md:pr-5">
          <NavLinks items={LEFT} />
        </nav>

        {/* A logo agora ocupa a coluna central do grid (antes era absolute e empurrava o menu da direita) */}
        <a
          href="#home"
          aria-label="Início"
          className="order-1 flex justify-center md:-mt-[45px] md:order-none"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 md:h-[120px]"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </a>

        <nav className="order-3 flex flex-wrap justify-center gap-5 md:order-none md:justify-start md:gap-9 md:pl-5">
          <NavLinks items={RIGHT} />
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen min-h-[560px] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.avif'), linear-gradient(#2a62ff,#f6a58f 70%,#3b4a7a)" }}
      >
        <Square className="left-[146px] top-[320px] bg-white/25" />
        <Square className="left-[260px] top-[434px] !h-[228px] bg-[#7a1f47]/70" />
        <Square className="right-[50px] top-[320px] bg-white/35" />
        <Square className="right-[165px] top-[548px] bg-[#7a1f47]/85" />
        <Square className="bottom-0 left-[94px] bg-[#7a1f47]/60" />
        <Square className="bottom-0 right-[240px] bg-[#6b2c50]" />
      </section>

      {/* ÁREAS (filtro) — agora acima dos projetos */}
      <section id="areas" className="px-5 pb-14 pt-[70px]">
        <Title className="text-center">ÁREAS DE ATUAÇÃO</Title>
        <p className="mt-2 text-center tracking-[1.5px] text-[#7a1f47]">
          Filtre os projetos por área:
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          {AREAS.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={`cursor-pointer rounded border-2 border-[#b0123f] px-6 py-3 text-[15px] font-bold transition-colors hover:bg-[#b0123f] hover:text-white ${
                a === area ? "bg-[#b0123f] text-white" : "bg-transparent text-[#b0123f]"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="bg-gradient-to-b from-[#6b2c50] to-[#7d3552] px-5 pb-24 pt-20"
      >
        <Title light className="text-center">PROJETOS</Title>
        <p className="mt-2 text-center tracking-[1.5px] text-white">
          Aplicações que desenvolvi no Microsoft Power Apps:
        </p>

        <div className="mx-auto mt-12 grid max-w-[1240px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[170px] flex-col gap-2.5 rounded bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <strong className="text-lg text-[#7a1f47]">{p.title}</strong>
              <span className="text-sm leading-relaxed">{p.desc}</span>
              <em className="mt-auto text-sm font-bold not-italic text-[#b0123f]">
                Abrir aplicativo
              </em>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="grid min-h-[420px] md:grid-cols-2">
        <div className="px-6 py-14 md:py-20 md:pl-[max(40px,calc((100vw-1240px)/2+5px))] md:pr-10">
          <Title>SOBRE</Title>
          <hr className="mb-10 mt-3.5 max-w-[470px] border-0 border-t border-[#333]" />
          <p className="max-w-[470px] leading-[1.7]">
            Nós somos o <b className="text-[#7a1f47]">time TI da Singapura</b>, e desenvolvemos aplicativos no Power Apps integrados ao SharePoint para organizar processos e acompanhar indicadores e em linguagens de programação (JS).
          </p>
        </div>

        <div className="min-h-[240px] bg-[url('/sobre.jpg')] bg-cover bg-center" />
      </section>

      {/* FOOTER */}
      <footer
        id="contato"
        className="relative overflow-hidden bg-[#7a2848] px-6 py-14 text-white"
      >
        {/* foto da cidade bem suave ao fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('/hero.avif')" }}
        />

        <div className="relative mx-auto grid max-w-[1100px] gap-10 sm:grid-cols-2 md:grid-cols-[1.1fr_1fr_1.1fr_1fr]">
          {/* Logo (versão branca — você faz no Canva e salva como public/logo-branca.png) */}
          <div className="flex items-start justify-center md:justify-start">
            <img
              src="/logo-branca.png"
              alt="Logo"
              className="h-44"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          {/* Institucional */}
          <div>
            <FooterTitle>Institucional</FooterTitle>
            <ul className="space-y-1 text-[17px] font-light">
              <li><a href="#home" className="text-white/50 hover:text-white">Home</a></li>
              <li><a href="#areas" className="hover:text-white/70">Áreas</a></li>
              <li><a href="#projetos" className="hover:text-white/70">Projetos</a></li>
              <li><a href="#sobre" className="hover:text-white/70">Sobre</a></li>
              <li><a href="#contato" className="hover:text-white/70">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <FooterTitle>Contato</FooterTitle>
            <div className="space-y-4 text-[17px] font-light">
              <p className="flex items-center gap-3">
                <svg className="h-6 w-6 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {CONTACT.phone}
              </p>
              <p className="flex items-start gap-3">
                <svg className="h-6 w-6 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {CONTACT.address.map((l) => (
                    <span key={l} className="block leading-snug">{l}</span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7a2848] transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}