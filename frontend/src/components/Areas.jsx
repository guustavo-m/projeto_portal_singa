import SectionTitle from "./SectionTitle";

export default function Areas({ areas, selected, onSelect }) {
  return (
    <section id="areas" className="px-5 pb-14 pt-[70px]">
      <SectionTitle className="text-center">ÁREAS DE ATUAÇÃO</SectionTitle>
      <p className="mt-2 text-center tracking-[1.5px] text-[#7a1f47]">
        Filtre os projetos por área:
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3.5">
        {areas.map((a) => (
          <button
            key={a}
            onClick={() => onSelect(a)}
            className={`cursor-pointer rounded border-2 border-[#b0123f] px-6 py-3 text-[15px] font-bold transition-colors hover:bg-[#b0123f] hover:text-white ${
              a === selected ? "bg-[#b0123f] text-white" : "bg-transparent text-[#b0123f]"
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </section>
  );
}