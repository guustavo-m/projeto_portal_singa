import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="sobre" className="grid min-h-[420px] md:grid-cols-2">
      <div className="px-6 py-14 md:py-20 md:pl-[max(40px,calc((100vw-1240px)/2+5px))] md:pr-10">
        <SectionTitle>SOBRE</SectionTitle>
        <hr className="mb-10 mt-3.5 max-w-[470px] border-0 border-t border-[#333]" />
        <p className="max-w-[470px] leading-[1.7]">
          Nós somos o <b className="text-[#7a1f47]">time TI da Singapura</b>, e desenvolvemos
          aplicativos no Power Apps integrados ao SharePoint para organizar processos e
          acompanhar indicadores e em linguagens de programação (JS).
        </p>
      </div>

      <div className="min-h-[240px] bg-[url('/sobre.jpg')] bg-cover bg-center" />
    </section>
  );
}