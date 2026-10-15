import { contact, footerLinks } from "../services/data";

const FooterTitle = ({ children }) => (
  <h3 className="mb-3 text-[26px] font-normal text-white">{children}</h3>
);

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-[#7a2848] px-6 py-14 text-white">
      {/* foto da cidade bem suave ao fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero.avif')" }}
      />

      <div className="relative mx-auto grid max-w-[1100px] gap-10 sm:grid-cols-2 md:grid-cols-[1.1fr_1fr_1.1fr_1fr]">
        {/* Logo */}
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
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={l.muted ? "text-white/50 hover:text-white" : "hover:text-white/70"}
                >
                  {l.label}
                </a>
              </li>
            ))}
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
              {contact.phone}
            </p>
            <p className="flex items-start gap-3">
              <svg className="h-6 w-6 shrink-0 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="block leading-snug">{line}</span>
                ))}
              </span>
            </p>
          </div>
        </div>

        {/* Redes sociais */}
        <div>
          <FooterTitle>Redes Sociais</FooterTitle>
          <a
            href={contact.linkedin}
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
  );
}