import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  align = "center",
}: {
  index: string;
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span className="font-display text-gold/60">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-gold to-transparent" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
