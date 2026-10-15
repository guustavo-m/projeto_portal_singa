const Square = ({ className }) => (
  <i className={`absolute hidden h-[114px] w-[114px] md:block ${className}`} />
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[560px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/hero.avif'), linear-gradient(#2a62ff,#f6a58f 70%,#3b4a7a)",
      }}
    >
      <Square className="left-[146px] top-[320px] bg-white/25" />
      <Square className="left-[260px] top-[434px] !h-[228px] bg-[#7a1f47]/70" />
      <Square className="right-[50px] top-[320px] bg-white/35" />
      <Square className="right-[165px] top-[548px] bg-[#7a1f47]/85" />
      <Square className="bottom-0 left-[94px] bg-[#7a1f47]/60" />
      <Square className="bottom-0 right-[240px] bg-[#6b2c50]" />
    </section>
  );
}