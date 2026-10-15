import SectionTitle from "./SectionTitle";

export default function Projects({ projects }) {
  return (
    <section
      id="projetos"
      className="bg-gradient-to-b from-[#6b2c50] to-[#7d3552] px-5 pb-24 pt-20"
    >
      <SectionTitle light className="text-center">PROJETOS</SectionTitle>
      <p className="mt-2 text-center tracking-[1.5px] text-white">
        Aplicações que desenvolvemos no Microsoft Power Apps:
      </p>

      <div className="mx-auto mt-12 grid max-w-[1240px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
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
  );
}