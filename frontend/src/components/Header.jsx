import { navLeft, navRight } from "../services/data";

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

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 grid grid-cols-1 justify-items-center gap-2 bg-white/70 px-4 py-4 md:h-[190px] md:grid-cols-[1fr_220px_1fr] md:items-start md:justify-items-stretch md:bg-transparent md:px-0 md:pb-0 md:pt-[90px]">
      <nav className="order-2 flex flex-wrap justify-center gap-5 md:order-none md:justify-end md:gap-9 md:pr-5">
        <NavLinks items={navLeft} />
      </nav>

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
        <NavLinks items={navRight} />
      </nav>
    </header>
  );
}