import { honors, skills } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Stagger";

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-mist transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold-soft">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04" eyebrow="What I work with" title="Skills" />

        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass space-y-8 rounded-3xl p-8">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Technical skills
                </h3>
                <StaggerGroup className="flex flex-wrap gap-2">
                  {skills.technical.map((s) => (
                    <StaggerItem key={s}>
                      <Chip label={s} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((s) => (
                      <Chip key={s} label={s} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((s) => (
                      <Chip key={s} label={s} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Soft skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  English
                </h3>
                <p className="text-sm leading-relaxed text-mist">
                  {skills.english}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Honors &amp; Awards
            </h3>
            <div className="space-y-4">
              {honors.map((h) => (
                <div key={h.title} className="glass rounded-2xl p-5">
                  <p className="font-display font-semibold text-white">
                    {h.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
