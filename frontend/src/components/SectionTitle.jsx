export default function SectionTitle({ children, light = false, className = "" }) {
  return (
    <h2
      className={`text-3xl font-normal tracking-[3px] md:text-[44px] ${
        light ? "text-white" : "text-[#7a1f47]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}