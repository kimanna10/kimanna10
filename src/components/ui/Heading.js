export default function Heading({ title }) {
  return (
    <h1 className="p-5 text-[13vw] md:text-[10vw] font-bold text-foreground/40 uppercase leading-none select-none pointer-events-none z-0">
      {title}
    </h1>
  );
}
