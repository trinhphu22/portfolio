import AnimatedCounter from "./AnimatedCounter";
import { education, profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STATS = [
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Phone", value: profile.phone },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" eyebrow="Get to know me" title="About" />

      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="glass h-full rounded-3xl p-8">
            <p className="leading-relaxed text-mist">{profile.summary}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="font-semibold text-gold-soft">Experience</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">
                  <AnimatedCounter to={4} suffix="+ years" />
                </dd>
              </div>
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-semibold text-gold-soft">{s.label}</dt>
                  <dd className="mt-1 truncate text-mist">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.15}>
          <div className="glass h-full rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Education
            </p>
            <h3 className="mt-3 font-display font-semibold text-white">
              {education.school}
            </h3>
            <p className="text-sm italic text-mist">{education.major}</p>
            <p className="mt-1 text-sm font-medium text-gold-soft">
              {education.period}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              {education.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
